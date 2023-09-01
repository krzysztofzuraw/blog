---
title: Django and nginx file proxy
pubDate: 2017-05-14
slug: 2017/django-and-nginx-file-proxy
---

**In this blog post series, I will show you how to use Nginx for hiding
download urls. Django will serve us as a backend. Let's go!**

In this series I will build simple web application - user upload a file
via api and then she/he wants to download it. But as a creator of this
service I decided to not show my url to end user - instead I want to use
a proxy.

## Setting up Django & Nginx application in docker

In this blog post, I will setup django with Nginx using docker
containers. If you want to know how to use Nginx for hiding download
urls wait till next week.

I have my django application up and running in docker with following
structure:

```shell
.
├── compose
│   ├── django
│   │   ├── Dockerfile
│   │   └── entrypoint.sh
├── config
│   ├── __init__.py
│   ├── settings
│   │   ├── common.py
│   │   ├── __init__.py
│   │   ├── local.py
│   ├── urls.py
│   └── wsgi.py
├── django_nginx_proxy
│   ├── images
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── __init__.py
│   │   ├── migrations
│   │   │   ├── 0001_initial.py
│   │   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── media
├── docker-compose.yml
├── LICENSE
├── Makefile
├── manage.py
├── README.rst
└── requirements
  ├── base.txt
  └── local.txt
```

It's one app - `Images` with stores information about image - `title`
and `image_file`.

To add nginx I have to create a new subfolder in compose directory -
`nginx` with `Dockerfile`:

```docker
FROM nginx:latest

ADD nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/www/media

WORKDIR /var/www/media

RUN chown -R nginx:nginx /var/www/media
```

It's using the latest nginx and copies it configuration. Then make sure
that nginx user has access to interesting for us folder. `nginx.conf` is
presenting as follows:

```nginx
user  nginx;

http {

  client_max_body_size 100M;


  upstream app {
    server django:5000;
  }

  server {
    listen 80;
    charset     utf-8;

    location /media/ {
      root /var/www/;
    }

    location / {
      try_files $uri @proxy_to_app;
    }

    location @proxy_to_app {
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_redirect off;
      proxy_pass   http://app;

    }
  }
}
```

I present you the most important lines - the rest you will find in
a repo. Setting `client_max_body_size` allows me to upload files till
100M. I use nginx to serve media files - uploaded images. That's
why I needed `location /media/`.

The rest of requests goes to django application - and in production
settings - gunicorn.

The last piece of a puzzle is `docker-compose.yml`:

```yaml
nginx:
  build: ./compose/nginx
  depends_on:
    - django
  ports:
    - "0.0.0.0:80:80"
  volumes:
    - ./django_nginx_proxy/media:/var/www/media
```

This config tells docker-compose to build nginx from Dockerfile under
`compose/nginx`.

Important line here is volumes - I use only one folder in nginx
container. Thanks to that we user upload a file it goes from django
container to media folder and then is taken up by nginx container.

## How to hide urls from the user?

It can be done in several ways but I will show it how you can use a
power of Nginx to do that.

When the user uses my API I will serve him a generic link to download an
image: `/download/image/<image_id>`. Under the hood, Django will add a
header called
[X-Accel-Redirect](https://www.nginx.com/resources/wiki/start/topics/examples/x-accel/#x-accel-redirect)
to the server response. This header will tell Nginx that media files are
served from internal location. The user will see the only first link,
not the hidden one!

## How to use X-Accel-Redirect with Django?

First of all, I want my `media` location to be internal. It means that
Nginx will allow access only when the location is accessed via
redirection. To enable that I have to edit `nginx.conf` and add
`internal`:

```nginx
location /media/ {
  internal;
  root /var/www/;
}
```

I want my API to return `image_link` which will be generic url in this
form: `/download/image/<image_id>`. How to do that? Add new field in
serializers:

```python
from rest_framework.reverse import reverse


class ImageSerializer(serializers.ModelSerializer):
    image_link = serializers.SerializerMethodField('get_url')

  # rest of the Meta

    def get_url(self, obj):
        request = self.context['request']
        return reverse('api:download-image', kwargs={'image_id': obj.id}, request=request)
```

At the end of `get_url` I'm reversing the user to the new view
`download_image_view`:

```python
from django.http import HttpResponse


def download_image_view(request, image_id):
    image = Image.objects.get(id=image_id)
    response = HttpResponse()
    response['X-Accel-Redirect'] = image.image_file.url
    response['Content-Disposition'] = 'attachment; filename="{}"'.format(image.image_file.name)
    return response
```

The most important lines here are those two that adds headers to the
response. First I use mentioned before `X-Accel-Redirect` with media
location. Right after that, I add `Content-Disposition`
[header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition).
It tells a browser that this file should be downloaded with provided
filename.

That's all! Right now user can only use `download/image` url, not the
media one.

Source code is available in this
[repo](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/django_nginx_proxy).

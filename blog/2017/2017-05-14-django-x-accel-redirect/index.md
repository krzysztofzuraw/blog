---
title: Django and nginx file proxy - part one
date: '2017-05-14T10:00Z'
slug: '/blog/2017/django-nginx-file-proxy-part-one'
tags:
  - django
  - nginx
  - python
  - proxy
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

I just present you the most important lines - the rest you will find in
a repo. Setting `client_max_body_size` allows me to upload files till
100M. I use nginx just to serve media files - uploaded images. That's
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
    - '0.0.0.0:80:80'
  volumes:
    - ./django_nginx_proxy/media:/var/www/media
```

This config tells docker-compose to build nginx from Dockerfile under
`compose/nginx`.

Important line here is volumes - I use only one folder in nginx
container. Thanks to that we user upload a file it goes from django
container to media folder and then is taken up by nginx container.

That's all for today! Stay tuned for next blog post and feel free to
comment.

Source code is available in this
[repo](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/django_nginx_proxy).

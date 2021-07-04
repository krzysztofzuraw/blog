---
title: Django and nginx file proxy - part two
date: 2017-05-21
permalink: '/blog/2017/django-nginx-file-proxy-part-two/index.html'
---

**You have our application up and running but there is a problem. You
don't want the user to see that your media files are served from media
url. How to fix that? This blog post will tell you one of the solutions.
Let's go!**

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

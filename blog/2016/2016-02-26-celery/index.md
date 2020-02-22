---
title: Django + Celery & Rabbit - part one
date: '2016-02-26T10:20Z'
slug: '/blog/2016/django-celery-rabbit-part-one.html'
tags: 
    - django
    - celery
    - rabbit
readNext: '/blog/2016/django-celery-rabbit-part-two.html'
---

**Hello, today post is first one in series about Celery in Django
application and how to use it.**

What you gain after reading such series?

How to integrate celery + rabbitmq in basic Django application.

So what will be our basic application?

It is planned to be web service where you can upload mp3 file and then
have them transcoded into ogg, wav and ac3 files. I wanted to make easy
and in the same time sophisticated project.

Recently I started reading an excellent book called [Two Scoops of
Django: Best Practices for Django
1.8](http://www.amazon.com/Two-Scoops-Django-Best-Practices/dp/0981467342).
The book is about what to do and what not to do for your Django project.
I feel some opportunity to try advice from the book in real project. I
will start from project layout: normally you have something like this:

```bash
$ tree trancoder

trancoder
├── audiotranscoder
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
└── trancoder
    ├── manage.py
    └── trancoder
        ├── __init__.py
        ├── settings.py
        ├── urls.py
        └── wsgi.py
```

But in the book authors suggest that it can be changed to something like
this:

```bash
$ tree transcoder

transcoder
├── README.rst
├── requirements.txt
└── transcoder
    ├── audio_transcoder
    │   ├── admin.py
    │   ├── apps.py
    │   ├── forms.py
    │   ├── __init__.py
    │   ├── migrations
    │   │   ├── 0001_initial.py
    │   │   └── __init__.py
    │   ├── models.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── config
    │   ├── __init__.py
    │   ├── settings.py
    │   ├── urls.py
    │   └── wsgi.py
    ├── manage.py
    ├── media
    └── templates
        ├── base.html
        ├── home.html
        └── upload.html
```

After working some time with this layout I have to say that it's very
responsive and good structured in my opinion. But there is need for
changes in 2 files for Django to be able recognizing where to look up
for settings and WSGI modules:

`manage.py`:

```python
#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
```

`settings.py`:

```python
# rest of settings file
ROOT_URLCONF = 'config.urls'

WSGI_APPLICATION = 'config.wsgi.application'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

MEDIA_URL = '/media/'
```

The transcoder need file to transcode so I created a model, form and
view for mp3 file.

`audio_transcoder/models.py`:

```python
import uuid

from django.db import models


def unique_file_path(instance, filename):
    new_file_name = uuid.uuid4()
    return str(new_file_name)

class AudioFile(models.Model):
    name = models.CharField(max_length=100, blank=True)
    mp3_file = models.FileField(upload_to=unique_file_path)
    ogg_file = models.FileField(blank=True, upload_to=unique_file_path)
    wav_file = models.FileField(blank=True, upload_to=unique_file_path)
    ac3_file = models.FileField(blank=True, upload_to=unique_file_path)

    def __str__(self):
        return self.name
```

To avoid filename duplication of uploaded files I changed their names to
be unique. the `upload_to` argument takes function `unique_file_path`
which will generate unique name. This function has to take 2 arguments:
`instance` and `filename`.

`audio_transcoder/forms.py`:

```python
from django.forms import ModelForm
from .models import AudioFile


class AudioFileFrom(ModelForm):
    class Meta:
        model = AudioFile
        fields = ['name', 'mp3_file']
```

Here I have used `ModelForm` which is the easiest way to generate the
form for given model.

`audio_transcoder/views.py`:

```python
from django.views.generic.edit import FormView
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse

from .forms import AudioFileFrom
from .models import AudioFile


class UploadAudioFileView(FormView):
    template_name = 'upload.html'
    form_class = AudioFileFrom


    def form_valid(self, form):
        audio_file = AudioFile(
            name=self.get_form_kwargs().get('data')['name'],
            mp3_file=self.get_form_kwargs().get('files')['mp3_file']
        )
        audio_file.save()

        return HttpResponseRedirect(self.get_success_url())

    def get_success_url(self):
        return reverse('home')
```

And in `UploadAudioFileView` in form validation I took `name` and
`mp3_file` from form submitted by user and save then in corresponding
model. I have hard time figuring out where to put saving model. At first
I wanted to work as generic CBV so no `form_valid` I just pass
additional argument to class: `success_url` but it didn't save
`audioFile`. Also moving `form_valid` to `AudioFileFrom` didn't help.
After some more research I found this [GoDjango
tutorial](https://godjango.com/35-upload-files/). If you have better way
to do this please let me know!

The code that I have made so far is available on
[github](https://github.com/krzysztofzuraw/blog-celery-rabbit). Stay
tuned for next blog post from this series.

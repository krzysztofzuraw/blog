---
title: Django + Celery & Rabbit - part four
date: '2016-03-19T10:20Z'
slug: '/blog/2016/django-celery-rabbit-part-four.html'
tags: 
    - django
    - celery
    - rabbit
readPrev: '/blog/2016/django-celery-rabbit-part-three.html'
---

**This is the fourth part of Celery and RabbitMQ in Django series. Today
I will fix minor bugs and sum up this series.**

Audio File detail view
======================

The problem was after successful upload django redirect to detail view
of uploaded file. And in HTML template of this view, it expects that
`ac3_file` will be there but FFmpeg still is transcoding it. So I came up
with solution:

1.First, I added new field to `AudioFile` model called `was_processed`
to indicate whenever file has been processed:

```python
class AudioFile(models.Model):
    # ....
    was_processed = models.BooleanField(default=False)
```

By default, this field has value `False`.

2.Then in my task I added
[signal](http://docs.celeryproject.org/en/latest/userguide/signals.html)
handler that ran after every task:

```python
from celery.signals import task_postrun

@task_postrun.connect
def task_executed_handler(sender=None, body=None, **kwargs):
    audio_file = AudioFile.objects.get(id=kwargs['args'][0])
    audio_file.was_processed = True
    audio_file.save()
```

In this handler id of `AudioFile` object is taken from `kwargs`. After
retrieving certain file from the database, the flag `was_processed` is
set.

3.Lastly, in my `audiofile_detail.html` I added this code:

```html
{% if object.was_processed %}
    <ul><a href="{{ object.ac3_file.url}}">Ac3 File</a></ul>
    <ul><a href="{{ object.ogg_file.url}}">Ogg File</a></ul>
    <ul><a href="{{ object.wav_file.url}}">Wav File</a><ul>
{% endif %}
```

Logging
=======

Right now everything works great but what if something goes wrong? To
make sure that I will be able to find the issue I need logging. This is
especially valuable for celery because Django doesn't show output from
Celery as it is a different application. So to setup basic logging I
need to add only a few things in `tasks.py`:

```python
from celery.utils.log import get_task_logger

logger = get_task_logger(__name__)


@app.task
def transcode_mp3(mp3_id):
    # ...

    logger.debug(
        'Created output files: %s, %s, %s.',
        ogg_output_file_path,
        ac3_output_file_path,
        wav_output_file_path
    )

    logger.info('Started transcoding.')
    # transcoding here
    logger.info('End of transcoding.')

    # rest of program ...
```

Thanks to that I can see in my console:

```bash
[2016-03-19 09:55:07,184: INFO/Worker-4] taskapp.tasks.transcode_mp3[b6ca93d4-e58c-496f-b8e5-4ba493b8a92a]: Started transcoding.
# transcoding ...
[2016-03-19 09:55:11,837: INFO/Worker-4] taskapp.tasks.transcode_mp3[b6ca93d4-e58c-496f-b8e5-4ba493b8a92a]: End of transcoding.
```

Summary
=======

This was the last post of Django Celery Rabbit series. I made basic
transcoder application that uses FFmpeg, Django, Celery and RabbitMQ. I
learned quite a bit about how celery works with rabbitmq and django.
Thanks to that I stumbled upon some useful blog
[posts](https://denibertovic.com/posts/celery-best-practices/). I also
see some issues with my solutions. For instance todays AudioFile detail
view. I'm thinking about other ways to solve this problem because right
now I need 2 operations on database for one file. Maybe you know
solution to this? I'm really keen to hear about your view on this issue
or other comments so feel free to write comments or send me an email!
Thanks to all people who give me feedback- I really appreciate this!
Code for this series can be found on
[github](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_celery_rabbit).

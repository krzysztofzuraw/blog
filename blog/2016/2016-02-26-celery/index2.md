---
title: Django + Celery & Rabbit - part three
date: '2016-03-12T10:20Z'
slug: '/blog/2016/django-celery-rabbit-part-three.html'
tags: 
    - django
    - celery
    - rabbit
readNext: '/blog/2016/django-celery-rabbit-part-four.html'
readPrev: '/blog/2016/django-celery-rabbit-part-two.html'
---

**This is a third part of Celery and RabbitMQ in Django series. Today I
will be building the Celery and RabbitMQ stack.**


First: why we need Celery? Imagine that user upload mp3 file to the
application and then in form validation the file is transcoded to other
formats. The problem is that user will have to wait for the end of a
task. So user sends a request. Then he waits for ffmpeg to transcode
uploaded file to different format and then sends the response back. At
first glance, it may look correct. But imagine that there are big files
to transcode or there is a lot of formats to transcode. The user will
have to wait a lot of time. To avoid this I will use celery task with
rabbitmq broker to provide transcoding in the background.

So what is exactly celery? From the
[docs](http://www.celeryproject.org/):

> Celery is a simple, flexible and reliable distributed system to
> process vast amounts of messages, while providing operations with the
> tools required to maintain such a system.

What does it mean? It is task manager that handle messages (tasks) in
whenever form you like. Task is a function that could calculate
something or handle some logic or maybe transcode files. But celery
without message broker is useless. Celery support a lot of message
brokers, but RabbitMq is supported out of the box so I will use this
service. You may ask what is RabbitMq? It is broker- translates a
message from the sender (django application) to reciever (celery).

So go to code:

First install rabbitmq with plugin that displays its status:

```bash
$ sudo apt-get install rabbitmq-server
$ sudo rabbitmq-plugins enable rabbitmq_management
$ sudo rabbitmqctl stop
$ sudo invoke-rc.d rabbitmq-server start
```

Add admin user to rabbitmq-server:

```bash
$ sudo rabbitmqctl add_user admin admin
$ sudo rabbitmqctl set_user_tags admin administrator
$ sudo rabbitmqctl set_permissions -p / admin ".*" ".*" ".*"
```

Right now you can go to `localhost:15672` to see:

![](./rabbit.png)

Now it's time to get celery working. First I will create new folder
called `taskapp` where I will be putting my celery configuration:

```bash
├── audio_transcoder
├── taskapp
│   ├── celery.py
│   ├── __init__.py 
│   └── tasks.py
│ # some other files ...
```

In `celery.py` are configs:

```python
from __future__ import absolute_import

from celery import Celery

app = Celery('transcoder',
             broker='amqp://admin:admin@localhost//',
             include=['taskapp.tasks'])

if __name__ == '__main__':
    app.start()
```

The first line is for backward compatibility with python2. In `app`
configuration I specify: name of application- `transcoder`, url where
broker will be listening with
credentials-`broker='amqp://admin:admin@localhost//'` and files
containing tasks-`include=['taskapp.tasks']`.

Then in `tasks.py` I added task itself:

```python
from __future__ import absolute_import
import os
import os.path
import subprocess

from taskapp.celery import app
from audio_transcoder.models import AudioFile
import config.settings as settings

@app.task
def transcode_mp3(mp3_id):
    audio_file = AudioFile.objects.get(id=mp3_id)
    input_file_path = audio_file.mp3_file.path
    filename = os.path.basename(input_file_path)

    ogg_output_file_name = os.path.join('transcoded', '{}.ogg'.format(filename))
    ogg_output_file_path = os.path.join(settings.MEDIA_ROOT, ogg_output_file_name)

    ac3_output_file_name = os.path.join('transcoded', '{}.ac3'.format(filename))
    ac3_output_file_path = os.path.join(settings.MEDIA_ROOT, ac3_output_file_name)

    wav_output_file_name = os.path.join('transcoded', '{}.wav'.format(filename))
    wav_output_file_path = os.path.join(settings.MEDIA_ROOT, wav_output_file_name)

    if not os.path.isdir(os.path.dirname(ogg_output_file_path)):
        os.makedirs(os.path.dirname(ogg_output_file_path))

    subprocess.call([
            settings.FFMPEG_PATH,
            '-i',
            input_file_path,
            ogg_output_file_path,
            ac3_output_file_path,
            wav_output_file_path
        ]
    )

    audio_file.ogg_file = ogg_output_file_name
    audio_file.ac3_file = ac3_output_file_name
    audio_file.wav_file = wav_output_file_name
    audio_file.save()
```

What I got there? Let's start with `transcode_mp3` function. It has
`@app.task` decorator to indicate for celery that it is its task. The
argument is `mp3_id`. After getting the id of newly uploaded file this
task gets `audio_file` model from the database and retrieve path to the
uploaded mp3 file. Then it generated file names and paths for every
format: ogg, wav and ac3. Right after it checks whenever folder
`transcoded` under `media` is present. Calling `subprocess` is basically
the same as calling
`ffmpeg -i mp3_file.mp3 ogg_file.ogg ac3_file.ac3 wav_file.wav`. At the
end task saves the paths to outputs to database.

The tasks itself is called in views:

```python
from taskapp.tasks import transcode_mp3

class UploadAudioFileView(FormView):
    # ...
    def form_valid(self, form):
    # ...
    audio_file.save()
    transcode_mp3.delay(audio_file.id)
    # ...
```

Everything works as expected and I added redirection to detail view of
audio file after successful upload. The problem is that transcode is not
so fast as is redirection.

This and other bugs and small improvements will be fixed and added in
last post of this series in next week. Thanks for reading! I really
appreciate your feedback so please comment or write email. The code is
available on this github
[repo](https://github.com/krzysztofzuraw/blog-celery-rabbit).

---
title: Django + Celery & Rabbit - part two
date: '2016-03-05T22:12:03.284Z'
slug: '/blog/2016/django-celery-rabbit-part-two'
tags:
  - django
  - celery
  - rabbit
---

**Hello, today post is the second one in series about Celery in Django.
Today I write about** [ffmpeg](https://www.ffmpeg.org/).

In my application transcoding will be performed by ffmpeg. Why is that?

First of all, it's free & open source. So I don't have to pay to use it
and I like using the open source tools. Second thing is that ffmpeg is
more than enough for my task. It has a lot of features including
recording, streaming and transcoding both video and audio.

So how to use it? For this project, the ffmpeg needs to be compiled with
libmp3lame for mp3 files encoding, libvorbis for ogg format and enabled
non-free for ac3. There is
[guide](https://trac.ffmpeg.org/wiki/CompilationGuide/Ubuntu#ffmpeg) on
ffmpeg site how to compile ffmpeg build. Also, make sure that you have
cookies and tea with you while installation can take even 30 minutes.

After everything is setup all you need to do is:

```bash
$ ffmpeg -i mp3_file.mp3 wav_file.wav
$ ffmpeg -i mp3_file.mp3 ogg_file.ogg
$ ffmpeg -i mp3_file.mp3 ac3_file.ac3
```

The code above will transcode mp3 files into provided format. In my
application one celery task will be called with subprocess, then another
celery task will save the output of the first task to django model. This
is all for today post but next week I will be building the celery tasks
and integrating them with django.

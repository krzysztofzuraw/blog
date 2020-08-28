---
title: JSON Web Tokens in django application- part two
date: '2016-10-23T09:00Z'
slug: '/blog/2016/jwt-in-django-application-part-two'
tags:
  - python
  - django
  - jwt
---

**In this blog post, I will deal with creating simple Django application
for creating tasks using django rest framework.**

From this blog post, you can learn how to setup basic DRF application.

## Overview of application

The main goal of this application is to create tasks. Each task has a
title - string with a maximum length of 100 characters. Task also has a
person to which it is bound (many to one relation - ForeginKey). The
last thing that task have is date and time which given task is due to.
The user can easily modify each of tasks so GET, POST, PUT and DELETE
methods are supported.

As we know how the application is designed let's jump into the code.

## Application code

First, there is a need to create model for Task:

```python
from django.db import models
from django.contrib.auth.models import User


class Task(models.Model):
    title = models.CharField(max_length=100)
    person = models.ForeignKey(User)
    due_to = models.DateTimeField()

    def __str__(self):
        return 'Task with title: {}'.format(self.title)
```

The arguments of `Task` correspond to what was written in the overview.

As we have models ready now it's time to create serializers so data from
database can be converted to stream of bytes:

```python
from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
```

As you can see in `TaskSerializer` I used `HyperlinkedModelSerializer`
as a type of serializer that I want to use - thanks to that response
from my application will have hyperlinks to resources instead of just
primary keys that are used in `UserSerializer`. In this serializer, I
use django `User` as a source of data. I have to do this because `Task`
model has a reference to `User` and without serialization of the second
one I cannot serialize the task.

Right now I have my models and serializers ready so it's time to create
some views and urls. For a typical usage of views, DRF gives you generic
viewsets like
[ModelViewSet](http://www.django-rest-framework.org/api-guide/viewsets/#modelviewset).
ViewSet is a combination of the logic for a set of related views in a
single class. How do views look like?

```python
from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer, UserSerializer
from django.contrib.auth.models import User


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
```

I created 2 viewsets. The only thing that I need to provide is queryset
and `serializer_class` arguments so viewsets know which data they needed
to take and which serializer use. Right now there is only one thing
missing - urls:

```python
from django.conf.urls import url, include
from django.contrib import admin
from tasks import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'tasks', views.TaskViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
]
```

Here I set up `DefaultRouter` and hook `TaskViewSet` and `UserViewSet`
to it. Router is a way of building common routes for a resource. To get
all tasks - I go to `/tasks` uri. To retrieve first task I type
`tasks/1`. I can write this in urlpatterns but the router is doing the
same for me automatically.

Right now I can try my application:

```shell
$ http GET 127.0.0.1:9000
HTTP/1.0 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Date: Sun, 23 Oct 2016 08:36:23 GMT
Server: WSGIServer/0.2 CPython/3.5.1
Vary: Accept, Cookie
X-Frame-Options: SAMEORIGIN

{
    "tasks": "http://127.0.0.1:9000/tasks/",
    "users": "http://127.0.0.1:9000/users/"
}


$ http GET 127.0.0.1:9000/tasks/
HTTP/1.0 200 OK
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Date: Sun, 23 Oct 2016 08:45:50 GMT
Server: WSGIServer/0.2 CPython/3.5.1
Vary: Accept, Cookie
X-Frame-Options: SAMEORIGIN

[
    {
        "due_to": "2016-10-18T19:12:01Z",
        "person": "http://127.0.0.1:9000/users/1/",
        "title": "First one",
        "url": "http://127.0.0.1:9000/tasks/1/"
    },
    {
        "due_to": "2016-10-18T19:12:10Z",
        "person": "http://127.0.0.1:9000/users/1/",
        "title": "Second one",
        "url": "http://127.0.0.1:9000/tasks/2/"
    }
]
```

That's all for today! In the next post, I will make authentication with
JWT. Stay tuned!

Code for this blog post is under this
[github](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_jwt).

Special thanks to Kasia for being editor for this post. Thank you.

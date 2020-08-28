---
title: JSON Web Tokens in django application- part three
date: '2016-10-30T09:00Z'
slug: '/blog/2016/jwt-in-django-application-part-three'
tags:
  - python
  - django
  - jwt
---

**As we have working application now it's high time to make it more
secure by authenticating users. To do this I will use JSON Web Tokens.**

## JWT in Django Rest Framework

There are few packages on
[pypi](https://pypi.python.org/pypi?%3Aaction=search&term=JWT&submit=search)
that provide JWT support but as I am already using DRF I choose package
called [REST framework JWT
Auth](https://github.com/GetBlimp/django-rest-framework-jwt). It's
simple package and does it's job well so I can recommend it to everyone.
But you have to make sure that your application is behind SSL/TLS as JWT
tokens generated are not signed. But enough writing- let's jump into the
code.

## Implementing JWT in DRF application

First I added small change to my `Task` model definition in models.py:

```python
class Task(models.Model):
    # rest of model
    person = models.ForeignKey('auth.User', related_name='tasks')
    # rest of model
```

It is the same model definition but written using string. The code in
Django responsible for model lookup based on the string can be seen
[here](https://docs.djangoproject.com/en/1.9/_modules/django/apps/config/#AppConfig.get_model).

Then I added an additional field to `UserSerializer`- thanks to that
when getting info about the user I also get info about which tasks this
user has. It can be accomplished by:

```python
class UserSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Task.objects.all()
    )

    # rest of the code
```

As I got my models and serializers ready I need views:

```python
from rest_framework import permissions


class TaskViewSet(viewsets.ModelViewSet):
    # rest of the code

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class UserViewSet(viewsets.ModelViewSet):
    # rest of the code

    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
```

I added `permission_classes` to tell DRF that these views are read only
when the user is not authenticated. If I send a token ( or authenticate
in another way) I am able to modify data kept under this view. To
authenticate I needed a new endpoint so there's a small change to
urls.py:

```python
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    # rest of the code
    url(r'^api-auth/', obtain_jwt_token),
]
```

Right now the user firsts need to authenticate using this endpoint. In
return, endpoint gives back a token. Last thing to let this work is to
tell Django Rest Framework that I want to use JWT as a basic type of
authentication in settings.py:

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    )
}
```

And that's it! JWT should be working:

```shell
$ http GET 127.0.0.1:9000/tasks/
HTTP/1.0 200 OK
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Date: Sat, 29 Oct 2016 13:10:52 GMT
Server: WSGIServer/0.2 CPython/3.5.1
Vary: Accept
X-Frame-Options: SAMEORIGIN

[
  {
      "due_to": "2016-10-18T19:12:01Z",
      "person": "admin",
      "title": "First one",
  },
  {
      "due_to": "2016-10-18T19:12:10Z",
      "person": "admin",
      "title": "Second one",
  }
]

$ cat create_task.json
{
  "due_to": "2016-10-18T19:12:01Z",
  "person": 1,
  "title": "Next one",
}

$ http POST 127.0.0.1:9000/tasks/ < create_task.json
HTTP/1.0 401 Unauthorized
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Date: Sun, 30 Oct 2016 08:38:41 GMT
Server: WSGIServer/0.2 CPython/3.5.1
Vary: Accept
WWW-Authenticate: JWT realm="api"
X-Frame-Options: SAMEORIGIN

{
    "detail": "Authentication credentials were not provided."
}
```

To send POST you need:

```shell
$ http POST 127.0.0.1:9000/api-auth/ username=admin password=admin
HTTP/1.0 200 OK
Allow: POST, OPTIONS
Content-Type: application/json
Date: Sun, 30 Oct 2016 08:41:26 GMT
Server: WSGIServer/0.2 CPython/3.5.1
Vary: Accept
X-Frame-Options: SAMEORIGIN

{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0Nzc4MTc4NTMsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MX0.xWlhwgzzVjDwgTPp48AgAYDJnraGThlkGmBnJbKnA74"
}


$ http POST 127.0.0.1:9000/tasks/ < create_task.json 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0Nzc4MTc4NTMsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl9pZCI6MX0.xWlhwgzzVjDwgTPp48AgAYDJnraGThlkGmBnJbKnA74'
HTTP/1.0 201 Created
Allow: GET, POST, HEAD, OPTIONS
Content-Type: application/json
Date: Sun, 30 Oct 2016 08:53:30 GMT
Server: WSGIServer/0.2 CPython/3.5.1
Vary: Accept
X-Frame-Options: SAMEORIGIN

{
    "due_to": "2016-10-18T19:12:01Z",
    "id": 5,
    "person": 1,
    "title": "Next one"
}
```

That's all for today! Feel free to comment and check repo for this blog
post under this
[link](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_jwt).

Special thanks to Kasia for being editor for this post. Thank you.

---
title: JSON Web Tokens in django application- part four
date: '2016-11-13T09:00Z'
slug: '/blog/2016/jwt-in-django-application-part-four.html'
tags: 
    - python
    - django
    - jwt
readPrev: '/blog/2016jwt-in-django-application-part-three.html'
---

**When I started this series I have got one comment from my co-worker
that instead of authentication JWT can be used to sign one time links.
After reading through the documentation I found that can be a great idea
so I decided to write a blog post about it.**

Use case
========

Nowadays when a user creates an account he or she has to confirm
identity. It is done by sending an email with the link to confirm and
activate an account.

As this link has to expire and be safe this is a good use case for using
JSON Web Tokens. Such tokens can be generated for every user and set to
expire for example after two hours. How can it be done in Django? Let's
jump into the code.

JSON Web Tokens in urls
=======================

First I change the previous code from series and made special django app
just for users. But the first user has to register - that's why I made
new endpoint in `urls.py`:

```python
from users.views import UserViewSet, CreateUserView,
urlpatterns = [
    # rest of url patterns
    url('^api-register/$', CreateUserView.as_view()),
]
```

`CreateUserView` looks as follows:

```python
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class CreateUserView(CreateAPIView):

    model = User.objects.all()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        user = self.model.get(username=serializer.data['username'])
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        return Response(
            {
                'confirmation_url': reverse(
                    'activate-user', args=[token], request=request
                )
            },
            status=status.HTTP_201_CREATED, headers=headers
        )
```

In this view, I simply add few additional lines for creating JWT. Rest
of this is a standard code from [DRF](www.cdrf.co). First I created
payload by adding `user` to JWT creation process, then I created the
token from payload by calling `jwt_encode_handler`. At the end instead
of returning user data, I return `confirmation_url` for the end user to
enter and activate the account. By default django make every user active
so I have to write my own `create` method for `UserSerializer`:

```python
from django.contrib.auth.models import User
from rest_framework import serializers
from tasks.models import Task

class UserSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Task.objects.all()
    )

    class Meta:
        model = User
        fields = ('username', 'password', 'tasks', 'email')

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.is_active = False
        user.save()
        return user
```

It is simply for setting user as inactive during the process of account
creation. Right now when user wants to create an account he/she has to
send the following request:

``` {.sourceCode .shell}
$ http POST 127.0.0.1:9000/api-register/ username=krzysiek password=krzysiek email=krzysztof@kz.com
HTTP/1.0 201 Created
Allow: POST, OPTIONS
Content-Type: application/json
Date: Sun, 13 Nov 2016 15:16:33 GMT
Server: WSGIServer/0.2 CPython/3.5.2
Vary: Accept
X-Frame-Options: SAMEORIGIN

{
    "confirmation_url": "http://127.0.0.1:9000/api-activate/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtyenlzenRvZkBrei5jb20iLCJ1c2VyX2lkIjoyNSwidXNlcm5hbWUiOiJrcnp5c2llayIsImV4cCI6MTQ3OTA1MDQ5M30.CMcW8ZtU6AS9LfVvO-PoLyqcwi6cOK1VzI2o7pEPX2k/"
}
```

How this `confirmation_url` works? I made additional urlpattern:

```python
from users.views import ActivateUser

urlpatterns = [
    # rest of url patterns
    url(
        '^api-activate/(?P<token>.+?)/$',
        ActivateUser.as_view(),
        name='activate-user'
    ),
]
```

and in `ActivateUser`:

```python
class ActivateUser(APIView):

    def get(self, request, *args, **kwargs):
        token = kwargs.pop('token')
        try:
            payload = jwt_decode_handler(token)
        except jwt.ExpiredSignature:
            msg = _('Signature has expired.')
            raise exceptions.AuthenticationFailed(msg)
        except jwt.DecodeError:
            msg = _('Error decoding signature.')
            raise exceptions.AuthenticationFailed(msg)
        except jwt.InvalidTokenError:
            raise exceptions.AuthenticationFailed()

        user_to_activate = User.objects.get(id=payload.get('user_id'))
        user_to_activate.is_active = True
        user_to_activate.save()

        return Response(
            {'User Activated'},
            status=status.HTTP_200_OK
        )
```

This is generic `APIView` so I write get method for handling GET
requests. I was wondering if it's a good idea to activate user in GET
request or do it in PUT. If you have some thoughts about this I will be
happy to hear them. In `get` I simply take the token from kwargs and
perform validation on that token - if it's valid or expired. This part
of code usually lies in
[authentication](https://github.com/GetBlimp/django-rest-framework-jwt/blob/master/rest_framework_jwt/authentication.py#L81)
backend but in such class I don't have access to url of a request so in
this case, I have to implement this in such a way. If you have other
ways of handling such a case please let me know! So if everything looks
good I activate user:

```shell
$ http GET http://127.0.0.1:9000/api-activate/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtyenlzenRvZkBrei5jb20iLCJ1c2VyX2lkIjoyNSwidXNlcm5hbWUiOiJrcnp5c2llayIsImV4cCI6MTQ3OTA1MDQ5M30.CMcW8ZtU6AS9LfVvO-PoLyqcwi6cOK1VzI2o7pEPX2k/
HTTP/1.0 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Date: Sun, 13 Nov 2016 15:17:37 GMT
Server: WSGIServer/0.2 CPython/3.5.2
Vary: Accept
X-Frame-Options: SAMEORIGIN

[
    "User Activated"
]

$ http GET http://127.0.0.1:9000/api-activate/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImtyenlzenRvZkBrei5jb20iLCJ1c2VyX2lkIjoyNSwidXNlcm5hbWUiOiJrcnp5c2llayIsImV4cCI6MTQ3OTA1MDQ5M30.CMcW8ZtU6AS9LfVvO-PoLyqcwi6cOK1VzI2o7pEPX2k/
 HTTP/1.0 401 Unauthorized
 Allow: GET, HEAD, OPTIONS
 Content-Type: application/json
 Date: Sun, 13 Nov 2016 15:28:00 GMT
 Server: WSGIServer/0.2 CPython/3.5.2
 Vary: Accept
 WWW-Authenticate: JWT realm="api"
 X-Frame-Options: SAMEORIGIN

 {
     "detail": "Signature has expired."
 }
```

By default django rest framework jwt sets token expiry time to 5
minutes. If you want to change that add following lines in settings.py:

```python
JWT_AUTH = {
     'JWT_EXPIRATION_DELTA': datetime.timedelta(seconds=7)
}
```

That's all for today! Feel free to comment and check repo for this blog
post under this
[link](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_jwt).

Special thanks to Kasia for being editor for this post. Thank you.

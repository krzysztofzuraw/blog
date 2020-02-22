---
title: Django Haystack and Elasticsearch- part one
date: '2016-02-06T10:20Z'
slug: '/blog/2016/haystack-elasticsearch-part-one.html'
tags: 
    - django
    - elasticsearch
    - haystack
readNext: '/blog/2016/haystack-elasticsearch-part-two.html'
---

**Hello! Today blog post is about** [Django
Haystack](http://django-haystack.readthedocs.org/en/v2.4.1/toc.html)
**and how to integrate it quickly with**
[Elasticsearch](https://www.elastic.co/).

First after creating django project (At beginning of 2016
django-haystack don't work properly with django 1.9 so I used 1.8.9
version) and making new app let's add models:

```python
from django.db import models

GENDER_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female')
)

class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    email = models.CharField(max_length=100)
    ip_address = models.CharField(max_length=100)

    def __str__(self):
        return '{first_name} {last_name}'.format(first_name=self.first_name, last_name=self.last_name)
```

And register model to the admin site. Don't forget about adding created
app to settings.py and making `manage.py makemigrations` and
`manage.py migrate` after it:

```python
from django.contrib import admin

from .models import Person

admin.site.register(Person)
```

Then create simple script wich will load a data from JSON to the
database. This JSON data is randomly generated data from this
[webpage](https://www.mockaroo.com/). Call it `load.py` and place in
your django application folder.

```python
# coding=utf-8
import os
import json

from .models import Person

DATA_FILE = os.path.join(
os.path.dirname(
    os.path.dirname(
    os.path.dirname(__file__))),
    'MOCK_DATA.json'
)


def run(verbose=True):
with open(DATA_FILE) as data_file:
    data = json.load(data_file)
    for record in data:
        Person.objects.create(
            first_name=record['first_name'],
            last_name=record['last_name'],
            gender=record['gender'],
            email=record['email'],
            ip_address=record['ip_address'])
        print(record)
```

This script looks for file `MOCK_DATA.json`. Then based on fields on
this JSON loads data to the django application. You can run this by
`manage.py shell` and then:

```python
>>> from django_app import load
>>> load.run()
{'ip_address': '86.24.99.139', 'gender': 'Female', 'first_name': 'Christine', 'last_name': 'Cunningham', 'email': 'ccunninghamrq@howstuffworks.com'}
{'ip_address': '250.20.255.181', 'gender': 'Male', 'first_name': 'Scott', 'last_name': 'Hanson', 'email': 'shansonrr@utexas.edu'}
# rest of the records
```

That's all for this week. In next post, I will concentrate on how to
setup Elasticsearch and django-haystack.

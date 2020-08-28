---
title: Django Haystack and Elasticsearch- part two
date: '2016-02-12T10:20Z'
slug: '/blog/2016/haystack-elasticsearch-part-two'
tags:
  - django
  - elasticsearch
  - haystack
---

**Hello! This is the second part of Django Haystack and Elasticsearch
series.**

Now it's time to install and elasticsearch. On ubuntu you can do it as
follows:

1.First install java-8

```bash
$ sudo apt-get install python-software-properties -y
$ sudo add-apt-repository ppa:webupd8team/java -y
$ sudo apt-get update
$ sudo apt-get install oracle-java8-installer -y
```

2.Verify if it's properly installed

```bash
$ java -version
java version "1.8.0_72"
Java(TM) SE Runtime Environment (build 1.8.0_72-b15)
Java HotSpot(TM) 64-Bit Server VM (build 25.72-b15, mixed mode)
```

3.Now install elasticsearch itself

```bash
$ wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
$ echo "deb http://packages.elastic.co/elasticsearch/1.7.5/debian stable main" | sudo tee -a /etc/apt/sources.list.d/elk.list
$ sudo apt-get update && sudo apt-get install elasticsearch -y
$ sudo service elasticsearch start
```

4.Verify if elasticsearch is running

```bash
$ curl http://localhost:9200
{
  "status" : 200,
  "name" : "May \"Mayday\" Parker",
  "cluster_name" : "elasticsearch",
  "version" : {
    "number" : "1.7.5",
    "build_hash" : "00f95f4ffca6de89d68b7ccaf80d148f1f70e4d4",
    "build_timestamp" : "2016-02-02T09:55:30Z",
    "build_snapshot" : false,
    "lucene_version" : "4.10.4"
  },
  "tagline" : "You Know, for Search"
}
```

Now it's time to install to more python packages:

```bash
$ pip install django-haystack==2.4.1
$ pip install elasticsearch
```

After adding them to `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'haystack',
    'persons'
]
```

and setup up connection in `settings.py`:

```python
HAYSTACK_CONNECTIONS = {
    'default': {
        'ENGINE': 'haystack.backends.elasticsearch_backend.ElasticsearchSearchEngine',
        'URL': 'localhost:9200',
        'INDEX_NAME': 'haystack',
    },
}
```

Create file called `search_indexes.py` in your django application folder
(`django_project/django_app/search_indexes.py`):

```python
from haystack import indexes

from .models import Person


class PersonIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)
    first_name = indexes.CharField(model_attr='first_name')
    last_name = indexes.CharField(model_attr='last_name')
    gender = indexes.CharField(model_attr='gender')
    email = indexes.CharField(model_attr='email')
    ip_address = indexes.CharField(model_attr='ip_address')

    def get_model(self):
        return Person
```

In this file we declare indexes with will be created in elasticsearch.
The first field `text` indicates which field is primary to be searched
within. This field can be named wherever you wanted but the convention
is to name it `text`. There is only one field in each index with
`document=True` argument. Another argument `use_template=True` tells
haystack to use a template for building document for an index. This
document is usually located under
`django_project/templates/search/indexes/django_app/index_name.txt`. And
for this data looks like this:

```python
{{ object.title }}
{{ object.first_name }}
{{ object.last_name }}
{{ object.gender }}
{{ object.email }}
{{ object.ip_address }}
```

Don't forget to add this `django_project/templates/` to `TEMPLATES` in
settings.py:

```python
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR,'templates/'),],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

After this add `haystack.urls` to urls.py:

```python
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^search/', include('haystack.urls'))
]
```

Now it's time to create `search.html` in
`django_project/templates/search/search.html`:

```html
{% extends 'base.html' %}

{% block content %}

<h2>Person search</h2>

    <form method="get" action="." class="form" role="form">
        {{ form.non_field_errors }}
        <div class="form-group">
                {{ form.as_p }}
        </div>
        <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Search">
        </div>

        {% if query %}
            <h3>Results</h3>
            <div>
            <table class="table table-striped table-bordered" cellspacing="0" id='result_table'>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>IP address</th>
                </thead>
                <tbody>
                    {% for result in page.object_list %}
                        <tr>
                            <td>{{ result.first_name }}</td>
                            <td>{{ result.last_name }}</td>
                            <td>{{ result.gender }}</td>
                            <td>{{ result.email }}</td>
                            <td>{{ result.ip_address}}</td>
                        </tr>
                    {% empty %}
                        <tr>No results found.</tr>
                    {% endfor %}
                </tbody>
            <table>
            </div>
        {% endif %}
    </form>
{% endblock content %}

{% block extrajs %}
<script>
$(document).ready(function() {
    $('#result_table').DataTable({
        "searching": false
    });
} );
</script>
{% endblock %}
```

This is basic template for searching. I added
[DataTable](https://www.datatables.net/) just for better appearance.

Before we can search let's rebuild the indexes by:

```bash
$ ./manage.py rebuild_index
```

Now try to search something in elasticsearch itself to see if the
documents are there:

```bash
$ curl -XGET http://localhost:9200/haystack/_search?pretty=true&q=first_name:Scott
{
"took" : 3,
 "timed_out" : false,
 "_shards" : {
   "total" : 5,
   "successful" : 5,
   "failed" : 0
 },
 "hits" : {
   "total" : 1000,
   "max_score" : 1.0,
   "hits" : [ {
     "_index" : "haystack",
     "_type" : "modelresult",
     "_id" : "persons.person.1",
     "_score" : 1.0,
     "_source":{"django_ct": "persons.person", "last_name": "Harrison", "ip_address": "38.84.45.160", "email": "rharrison0@linkedin.com", "first_name": "Russell", "gender": "Male", "text": "\nRussell\nHarrison\nMale\nrharrison0@linkedin.com\n38.84.45.160\n", "id": "persons.person.1", "django_id": "1"}
   },
   # rest of results here...
}
```

And that's all. We got working search! You can find the repo on
[github](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_haystack).
If you feel that this post was valuable please send me email.
Thanks!

## Resources:

1.  [django-haystack
    docs](https://django-haystack.readthedocs.org/en/v2.4.1/tutorial.html)
2.  [this
    gist](https://gist.github.com/ricardo-rossi/8265589463915837429d)

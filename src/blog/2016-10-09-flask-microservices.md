---
title: Microservices in Flask
date: 2016-10-09
---

**I recently gave a talk about microservices in Flask on**
[Wrocpy](http://www.meetup.com/wrocpy/). **This blog post is a
translation of that talk into English.**

## Monolithic application

Microservices talk usually starts with a monolithic application. In my
case, it is the same. I work on a project where I have a big monolithic
application. If I wanted to take some part of it and make some
microservice from for instance django app it would be impossible. There
are too many internal imports from every part of application:

```python
from app.users.models import UserSiteProfile
from app.utils.cache import cache_key_user
from app.sites.models import SiteProfile
from app.sites.utils import site_terms
from app.utils.users import get_homepage_url
from app.utils.views import ThemedFormView, ThemedTemplateView
from app.authentication import signals
from app.authentication.forms import AuthForm, EmailForm
from app.authentication.idp import (
    is_valid_idp, MultipleIDPError, saml_available,
    site_idp, user_idp_lookup)
from app.authentication.loginchecks import (
    check_account_expiration, get_site_login_errors,
    pre_login_checks
)
from app.saml.utils import site_specific_config_loader
from app.saml.views import _get_subject_id
```

Snippet from above presents exemplary imports of random python module in
my project.

So where are these microservices? In my team, we decided to have **new**
parts of the application made as a microservices. So right now from the
architectural point of view I have a big monolithic application and
small microservices that are around this big thing, like in this
picture:

{% img "2016-10-09-planets", "Microservices in my project", "Microservices in my project" %}

# Flask microservices

We choose the [flask](http://flask.pocoo.org/) as a tool that will be
used in our microservices. It doesn't set any boundaries and it's
flexible but don't have _batteries included_. Let's start with the first
flask extension that helps us building microservices:

## Flask-Script

Django has a set of powerful commands available. To enable such a
feature in flask you need
[Flask-Script](flask-script.readthedocs.io/en/latest/). It allows you to
create commands such as `runserver` or `shell`. In listing below I
created a runserver command:

```python
from flask.ext.script import Manager, Shell, Server
from my_app.application import app

manager = Manager(app)
manager.add_command(
    'runserver',
    Server(host='0.0.0.0', port=7000, use_debugger=True)
)
```

## Flask-RESTful

To communicate between microservices I use REST. To ease yourself when
creating resources and endpoints you can use
[Flask-RESTful](flask-restful.readthedocs.io/en/0.3.5/). It is
superuseful when you need to create REST API. It is simple - you specify
endpoint with resource and rest is done by Flask-RESTful. It also has
request parsing and it is very simple to create other representations like
xml. The snippet below shows it:

```python
from flask_restful import Resource

class MyResource(Resource):
    def get():
        return {'OK'}

@api.representation('application/xml')
def output_xml(data, code, headers=None):
    response = make_response(dicttoxml.dicttoxml(data), code)
    inject_headers(response, headers)
    return response
```

## Marshallow & flask-marshallow

To serialize or deserialize objects you can use
[flask-marshallow](https://flask-marshmallow.readthedocs.io/en/latest/).
In code below, I created a simple `Schema` with id, name and url. Then
when the user enters `/api/custom/1` I can easily serialize objects from
a database and return JSON.

```python
ma = Marshmallow(app)

class CustomSchema(ma.Schema):
    id = ma.Int(dump_only=True)
    name = ma.Str(required=True)
    url = ma.Url(relative=True)


    @app.route('/api/custom/<id>')
    def users():
        all_obj = Object.all()
        result = object_schema.dump(all_obj)
        return jsonify(result.data)
```

## Flask-SQLAlchemy

Most of the modern frameworks have support for ORM- the same is with
Flask. There is an extension called
[Flask-SQLAchemy](http://flask-sqlalchemy.pocoo.org/2.1/) that adds
support for [SQLAlchemy](http://www.sqlalchemy.org/). Take this snippet
for instance:

```python
from flask.ext.sqlalchemy import SQLAlchemy
db = SQLAlchemy(app)

class MyModel(db.Model):
    GROUP = 'group'
    USER = 'user'
    TYPES = [
        (GROUP, GROUP),
        (USER, USER),
    ]

    __tablename__ = 'my_model'
    id = db.Column(db.Integer, primary_key=True)
    model_type = db.Column(ChoiceType(TYPES))
    model_value_id = db.Column(db.Integer, db.ForeignKey('model_value.id'))
    value = db.Column(db.String(1024))

    def __init__(self, model_type, model_value_id, value):
        self.share_type = share_type
        self.rule_value_id = rule_value_id
        self.value = value
```

I created `MyModel` class that will be translated to the table in a
database. I also add columns to that table like `model_type`,
`model_value_id` or `value`.

Flask SQLAlchemy is layer sitting on top of SQLAlchemy so you can use
all advantages of ORM like having queries written in python.

## Flask-Migrate

When your database keeps getting larger there is a need for database
migrations to make sure that everyone has the same database structure.
To accomplish that we use
[Flask-Migrate](flask-migrate.readthedocs.io/en/latest/). It is using
[Alembic](http://alembic.zzzcomputing.com/en/latest/) under the hood so
you have to make sure that adjust your migration files after generation.
Example migration file can look as follows:

```python
def upgrade():
    op.create_table(
        'my_model',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column(
            'model_type',
            sqlalchemy_utils.types.choice.ChoiceType(TYPES),
            nullable=True
        ),
        sa.PrimaryKeyConstraint('id'),
        sa.Column('value', sa.String(length=1024), nullable=True),
    )
    op.create_table(
        'my_model_values',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('model_value_id', sa.Integer(), nullable=True),
        sa.Column('value', sa.String(length=1024), nullable=True),
        sa.ForeignKeyConstraint(['model_value_id'], ['my_model.id']),
        sa.PrimaryKeyConstraint('id')
    )
```

In snipped above I created two tables: `my_model` and `my_model_values`
with respective columns. Also `my_model_values` has `ForeignKey`
relation to `my_model` by their ids.

## Testing

During the development of microservices, we write unit tests as well as
integration ones. Testing how well microservices behave with each other
can be tricky: we mock whole external services. Because of that, we need
to keep them up to date with real microservices. Nature of this system
causes some difficulties while an error occurs: I got an error from
external microservice in most cases with a form of HTTP status code and
a small message in JSON or XML. Then I need to debug not only my
microservice but also external one.

## Deployment

After testing is done we deploy microservice using few tools:

## Puppet

We use puppet for managing and provisioning our microservices.
Especially we use an R10k module for puppet: [gtihub
link](https://github.com/puppetlabs/r10k).

## Cookiecutter

To make sure that every microservice has the same structure we also use
[cookiecutter](https://github.com/audreyr/cookiecutter). Thanks to that
puppet knows that config file is always in this location or there will
be logs stored there. Example microservice structure will look as
follows:

```shell
└── flask_microservice
    ├── AUTHORS.rst
    ├── debian
    ├── docs
    │   ├── make.bat
    │   ├── Makefile
    │   └── source
    │       ├── authors.rst
    │       ├── conf.py
    │       ├── contributing.rst
    │       ├── history.rst
    │       ├── index.rst
    │       ├── readme.rst
    │       ├── technical_details.rst
    │       └── usage.rst
    |── HISTORY.rst
    ├── MANIFEST.in
    ├── README.rst
        ├── requirements.txt
        ├── setup.cfg
        ├── setup.py
        ├── src
        │   ├── flask_microservice
        │   │   ├── application.py
        │   │   ├── default_config.ini
        │   │   ├── __init__.py
        │   │   └── manage.py
        │   └── tests
        │       ├── conftest.py
        │       └── test_flask_microservice.py
        └── tox.ini
```

## Dh-virtualenv

To distribute packages we use
[dh-virtualenv](dh-virtualenv.readthedocs.io/en/latest/). This
is taking python virtual enviroments and packing it to deb packages. So
to have new code released we run jenkins job to create new deb.

That's all for today! The slides from this presentation can be found
here:
[presentation](http://www.slideshare.net/Krzysztofuraw/wrocpy-32-microservices-in-flask).
Do you also use flask to build microservices?

Special thanks to Kasia for being editor for this post. Thank you.

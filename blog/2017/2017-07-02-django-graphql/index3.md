---
title: Moving to Relay in Django backend
date: '2017-09-03T10:00Z'
slug: '/blog/2017/moving-to-relay-in-django-backend.html'
tags: 
    - django
    - python
    - graphql
readNext: '/blog/2017/setting-up-relay-modern-on-fe.html'
readPrev: '/blog/2017/monorepo-structure.html'
---

**Today I want to talk a little bit more about my next step in
developing a GraphQL application. This step is connected with moving
backend so it understands Relay.**

What exactly is Realy
======================

As documentation of [Relay](https://facebook.github.io/relay/) suggests
it's framework for working with external data in React. What does it
mean? It allows a developer to declare what data he or she needs on
frontend and relay will take care how to fetch it and use it in React
code.

How to setup Relay in Django
=============================

In 2 first blog post of this series, I created GraphQL from Django using
`DjangoObjectType`. Right now if I want to
use my application with Relay I have to move to the more generic
solution and implements nodes that can be understood by Relay:

```python
class Film(graphene.ObjectType):

    class Meta:
        interfaces = (relay.Node, )

    title = graphene.String()
    actors = graphene.List(Actor, description='List of actors that play in the film')
    air_date = graphene_datetime.DateTime()
    rating = graphene.Int()

    @classmethod
    def create_from_data(cls, data, id_):
        return cls(
            id=id_,
            title=data['title'],
            air_date=arrow.get(data['air_date']).date(),
            rating=data['rating'],
        )


    @classmethod
    def get_node(cls, id, context, info):
        response = requests.get(FILMS_ENDPOINT.format(id=id))
        data = response.json()
        return Film.create_from_data(data, id)

    def resolve_actors(self, args, context, info):
        response = requests.get(FILMS_ENDPOINT.format(id=self.id))
        data = response.json()
        return [relay.Node.get_node_from_global_id(
            to_global_id('Actor', actor_id),
            context,
            info
        ) for actor_id in data['actors']]
```

As you can see I declare `realy.Node` in `Meta`. Then I specified which
fields should `Film` need. I also added `get_node` method for getting
data via one instance and `resolve_actors` to get related data from
actors schema. I added this to my `Query`:

```python
class Query(graphene.AbstractType):
    film = graphene.relay.Node.Field(Film)
    films = graphene.List(Film)

    def resolve_films(self, args, context, info):
        response = requests.get(ALL_FILMS_ENDPOINT)
        data = response.json()
        return [Film.create_from_data(film, film['id']) for film in data]
```

Now I can query for both all films:

```javascript
{
  films {
    id
    title
  }
}
```

to get:

```javascript
{
    "data": {
        "films": [
        {
            "id": "RmlsbTox",
            "title": "Pulp Fiction"
        },
        {
            "id": "RmlsbToy",
            "title": "Django"
        },
        {
            "id": "RmlsbToz",
            "title": "Inglourious Basterds"
        },
        {
            "id": "RmlsbTo0",
            "title": "The Hateful Eight"
        },
        ]
    }
}
```

as you can see ids are encoded using base64 as relay is using such
format in its queries. I wrote similar code for actor model. Thanks to
that I can query for example first one:

```javascript
{
    actor(id:"QWN0b3I6MQ==") {
        firstName
        lastName
    }
}
```

and get result:

```javascript
{
    "data": {
        "actor": {
        "firstName": "John",
        "lastName": "Travolta"
        }
    }
}
```

The last thing I want to cover are mutations - they allow to create a
new data using GraphQL. How to implement one:

```python
class CreateFilm(relay.ClientIDMutation):

    class Input:
        title = graphene.String(required=True)
        actors = graphene.List(ActorInput)
        air_date = graphene_datetime.DateTime(required=True)
        rating = graphene.Int(required=True)

    film = graphene.Field(Film)

    @classmethod
    def mutate_and_get_payload(cls, args, context, info):
        actors_ids = [from_global_id(actor['actor_id'])[1] for actor in args['actors']]
        data_to_sent = {
            'title': args['title'],
            'actors': actors_ids,
            'air_date': arrow.get(args['air_date']).date(),
            'rating': args['rating'],
        }
        response = requests.post(ALL_FILMS_ENDPOINT, data=data_to_sent)
        data_from_server = response.json()
        film = Film.create_from_data(data_from_server, data_from_server['id'])
        return CreateFilm(film=film)


class Mutation(graphene.AbstractType):
    create_film = CreateFilm.Field()
```

Main logic sits in `mutate_and_get_payload` where I get database ids
from ones sent by Relay. I also hit the Django API to get all actors and
create a film entry. My mutation can look like this:

```javascript
mutation createNewFilm {
    createFilm(input: {title: "New title", actors: [{actorId: "QWN0b3I6MQ=="}], airDate: "2017-01-01", rating: 3}) {
            film {
            id
            title
            rating
            airDate
            actors {
                firstName
                lastName
            }
        }
    }
}
```

and I get back:

```javascript
{
    "data": {
        "createFilm": {
            "film": {
                "id": "RmlsbTo0OQ==",
                "title": "New title",
                "rating": 3,
                "airDate": "2017-01-01",
                "actors": [
                    {
                        "firstName": "John",
                        "lastName": "Travolta"
                    }
                ]
            }
        }
    }
}
```

That's all for today! I have my backend ready to work in Relay! Please
let me know if you have any questions or comments regarding this blog
post - all are welcome and take care!

Repo with code can be found on
[github](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_django_graphql_react_relay).

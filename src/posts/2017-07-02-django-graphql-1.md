---
title: Django, GraphQL & React - part one
date: 2017-07-02
permalink: '/blog/2017/django-graphql-react-part-one/index.html'
---

**Hello! Welcome back after a little break - I recently started working
on a project that uses GraphQL. Thant's why I thought that it will be
the best to show you how to build a simple application using these
tools. Let's get started!**

First, comes this idea - what application can I create so I will be able
to use Django, [GraphQL](http://graphql.org/learn/), React &
[Relay](https://facebook.github.io/relay/)?

After few minutes/hours, I decided to create simple film database. In my
Django application, I will be keeping records of actors & films. GraphQL
will fetch them but also will get data from external source. React will
consume GraphQL response using Relay.

For better understanding I created this diagram:

{% img "2017-07-02-flow", "Application flow", "Application flow" %}

As you can see light blue color represents frontend part of a whole
application. Yellow is GraphQL layer - I like to think about it in terms
of a gate to API. API word is combined with Django Application that uses
PostgreSQL database and external film API. They are in green color.

This week I created Django application which can be found in this github
[repo](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_django_graphql_react_relay).

That's all for today! It was a quick intro to what I will be doing in
following weeks so stay tuned for GraphQL posts!

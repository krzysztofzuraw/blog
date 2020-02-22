---
title: Gunicorn & LRU cache pitfall
date: '2017-02-05T10:00Z'
slug: '/blog/2017/gunicorn-lru-cache-pitfall.html'
tags: 
    - python
    - lru cache
    - gunicorn
---

**Today I want to write about some interesting situation connected with
using python LRU cache in an application that uses gunicorn.**

What is LRU cache?
==================

When you cache is starting to grow more and more you have to remove
something so new values can be stored in a cache. One of the algorithms
that are used to accomplish this task is called Least Recently Used
(LRU). When you performing LRU caching you always throw out the data
that was least recently used.

Imagine you have in cache five elements: `A,B,C,D,E`. You access element
A which is in cache - nothing changes. Right after that, you want to add
a new element to cache - `F`. At this moment the least recently used
item is `B` so you throw it and replace with `F`. The same mechanism
goes for other items. That's how LRU cache works.

Gunicorn & LRU pitfall
======================

In python 3 you can use decorator `@lru_cache` from `functools` module.
It stores a result of decorated function inside the cache. Imagine that
you have simple flask application:

```python
from flask import Flask, jsonify

from functools import lru_cache

app = Flask(__name__)

@app.route('/')
def main():
  store_to_cache()
  return jsonify({'message': 'Stored'})


@lru_cache(maxsize=2)
def store_to_cache():
  return {'this_goes_to_cache': 'and_this_too'}
```

You enter the root URL and you store dictionary to cache. Cache is setup
to have only 2 elements inside. Then you have a helper function for
getting info about an object that is inside that cache:

```python
@app.route('/get_cache_info')
def get_cache_info():
  cache_info = store_to_cache.cache_info()
  return jsonify({
      'Hits': cache_info.hits,
      'Misses': cache_info.misses,
      'Maxsize': cache_info.maxsize,
      'Currsize': cache_info.currsize
  })
```

When you run this application in development mode - without gunicorn
everything works as expected - you store to cache and receive proper
information:

```shell
$ curl -X GET http://127.0.0.1:8000
{
"message": "Stored"
}
$ curl -X GET http://127.0.0.1:8000/get_cache_info
{
  "Currsize": 1,
  "Hits": 0,
  "Maxsize": 2,
  "Misses": 1
}
```

Let's run the same code but with using gunicorn with two workers:

```shell
$ gunicorn --workers=2 application:app
$ curl -X GET http://127.0.0.1:8000
$ curl -X GET http://127.0.0.1:8000/get_cache_info
{
  "Currsize": 1,
  "Hits": 0,
  "Maxsize": 2,
  "Misses": 1
}
curl -X GET http://127.0.0.1:8000/get_cache_info
{
  "Currsize": 0,
  "Hits": 0,
  "Maxsize": 2,
  "Misses": 0
}
```

Sometimes request returns that there is one item inside cache and other
times that there are no items in the cache. Why is that? **Because LRU
cache is using cache per worker**. It means that when user enters your
site cache is stored but it is stored only on this worker! The same user
enters another time and his request is handled by the second worker
which doesn't have anything stored in the cache!

For this reason, it's not a good idea to use cache per worker in your
web application. What can you use instead? Use centrally stored cache
like Memcached. You will thank yourself in the future.

That's all for today! Feel free to comment - maybe you have a better
idea which cache use to avoid pitfalls?

Example of how LRU cache works is based upon this
[article](http://mcicpc.cs.atu.edu/archives/2012/mcpc2012/lru/lru.html).

The code that I have made so far is available on
[github](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/lru_cache).
Stay tuned for next blog post from this series.

#### Update 13-02-16:


Side note from my friend from work: Cache per worker is good for data
that doesn't change like archival exchange rate. But this type of cache
is not good for data that can change.

Thank you Paweł for this note.

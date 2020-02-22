---
title: Design by contract in python- part two
date: '2016-07-23T10:00Z'
slug: '/blog/2016/design-by-contract-in-python-part-two.html'
tags: 
    - python
    - design
    - contracts
readPrev: '/blog/2016/design-by-contract-in-python-part-one.html'
readNext: '/blog/2016/design-by-contract-in-python-part-three.html'
---

**Last time I wrote about py.contracts- today is the time for another
python library that helps to design by contracts.**

This library is called
[zope.interface](https://docs.zope.org/zope.interface/). From its GitHub
page:

> Interfaces are a mechanism for labeling objects as conforming to a
> given API or contract. So, this package can be considered as
> implementation of the Design By Contract methodology support in
> Python.

How is it translating to my example of `ExternalAPIPort` from the last
post? First I have to create interface for my port:

```python
from zope.interface import Interface, implements

class IExternalAPIPort(Interface):
    """A port will perform search in external service."""

    def search():
        """Perform search in external service."""

class ExternalAPIPort(object):
    implements(IExternalAPIPort)

    def __init__(self, adapter):
        self.adapter = adapter

    def search(self, query, *args, **kwargs):
        return self.adapter.search(query, *args, **kwargs)
```

Running this in python 3 will give you following traceback:

```pythontraceback
File "reddit-stars/external_api/external_api_port.py", line 11, in <module>
  class ExternalAPIPort(object):
File "reddit-stars/external_api/external_api_port.py", line 12, in ExternalAPIPort
  implements(IExternalAPIPort)
File ".virtualenvs/reddit-stars/lib/python3.5/site-packages/zope/interface/declarations.py", line 412, in implements
  raise TypeError(_ADVICE_ERROR % 'implementer')
TypeError: Class advice impossible in Python3.  Use the @implementer class decorator instead.
```

So to use it with python 3 you have to:

```python
from zope.interface import Interface, implementer

class IExternalAPIPort(Interface):

    def search():
        pass

@implementer(IExternalAPIPort)
class ExternalAPIPort(object):

    def __init__(self, adapter):
        self.adapter = adapter

    def search(self, query, *args, **kwargs):
        return self.adapter.search(query, *args, **kwargs)
```

Thanks to that I have access to some checks that can help me with
testing:

```python
>>> IExternalAPIPort.implementedBy(ExternalAPIPort
True
>>> IExternalAPIPort.providedBy(instantiated_port)
True
```

But how to write a contract? It's simple- let's start by creating
invariant:

```python
def search_invariant(obj):
    if not obj:
      raise ValueError('query cannot be empty')
    elif not isinstance(obj, str):
      raise ValueError('query has to be string')

class IExternalAPIPort(Interface):
    adapter = Attribute('external service')

def search():
   pass
```

Right now when you run it, you will receive following error that query
either has to be a string or not be empty:

```pythontraceback
File "/Development/reddit-stars/reddit_stars/urls.py", line 19, in <module>
   views import RedditSearchVie
 File "/Development/reddit-stars/search/views.py", line 4, in <module>
   from .forms import RedditSearchForm
 File "/Development/reddit-stars/search/forms.py", line 3, in <module>
   from external_api.external_api_port import instantiated_port #, fake_port
 File "/Development/reddit-stars/external_api/external_api_port.py", line 30, in <module>
   IExternalAPIPort.validateInvariants(1)
 File "/.virtualenvs/reddit-stars/lib/python3.5/site-packages/zope/interface/interface.py", line 438, in validateInvariants
   call(obj)
 File "/Development/reddit-stars/external_api/external_api_port.py", line 8, in search_invariant
   raise ValueError('query has to be string')
ValueError: query has to be string
# or
ValueError: query cannot be empty
```

Contract works! It assures that in running time that query will have to
have values that are specified in a contract.

You can even declare your own invariant errors like this:

```python
from zope.interface import Invalid

class QueryError(Invalid):
    def __str__(self):
        return "QueryError({})".format(*self.args)

def search_invariant(obj):
    if not obj:
        raise QueryError('query cannot be empty')
    elif not isinstance(obj, str):
        raise QueryError('query has to be string')
```

And right now traceback will show custom error:

```pythontraceback
external_api.external_api_port.QueryError: QueryError(query cannot be empty)
```

Unfortunately, I couldn't find the way to declare contract for return
`zope.intefrace`. If you found one please let me know

That's all for today! I hope you find this blog post interesting- feel
free to comment. In the next blog post, I'll write about another library
in python for contracts and some tools from the standard library.

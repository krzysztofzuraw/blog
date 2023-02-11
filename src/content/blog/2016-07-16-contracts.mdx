---
title: Design by contract in python
pubDate: 2016-07-16
slug: 2016/design-by-contract-in-python
---

**What exactly is design by contract? What is good and what is bad in
this approach? What are python libraries that provide support for such
design? You can find all these answers in this blog series about
contracts.**

Recently I read a [Pragmatic
Programmer](https://pragprog.com/book/tpp/the-pragmatic-programmer). In
this book there is a chapter 21: Design by Contract that stays:

> It is a simple yet powerful technique that focuses on documenting (and
> agreeing to) the rights and responibilites of software mdoules to
> ensure program correctness.

How to achieve this? There are 3 basic expectations of any given
function/class:

1.  **Preconditions**: What are function requirements in order to be
    called
2.  **Postconditions**: What is class guaranteed to do
3.  **Class invariants**: Conditions that are true after execution of
    function/class

Let's move to the actual implementation in python. I found at least 3
libraries that are made to provide help while using contracts. I'll
start from the first one:
[py.contracts](https://pypi.python.org/pypi/PyContracts).

To demonstrate how to use this library I'll reuse my old code from
[ports and apdaters
series](http://krzysztofzuraw.com/blog/2016/ports-and-adapters-in-python-part-three.html).
There is a reddit port:

```python
class ExternalAPIPort(object):

    def __init__(self, adapter):
        self.adapter = adapter

    def search(self, query, *args, **kwargs):
        return self.adapter.search(query, *args, **kwargs)
```

I want to make sure that query is a string. What is more, I want this
string not to be empty. And I return `search` should return nested list.
How do I contract it using py.contracts?

```python
from contracts import contract

# class ExternalAPIPort here

@contract(query='str[>0]', returns='list(str)')
def search(self, query, *args, **kwargs):
```

And messing around with wrong returns values gives you following errors:

```python
contracts.interface.ContractNotRespected: Breach for return value of ExternalAPIPort:search().
Expected a list, got 'int'.
checking: list(str)   for value: Instance of <class 'int'>: 1
```

Right now I knew because of contract that this `search` method will take
query parameter which has to be string with length more than 0
(precondition) and returns list of strings (postcondition).

The same can be accomplished with metaclasses:

```python
from contracts import contract, ContractsMeta

class BasePort(object):
    __metaclass__ = ContractsMeta

    @abstractmethod
    @contract(query='str[>0]', returns='list(str)')
    def search(self, query, *args, **kwargs):
        pass

class ExternalAPIPort(BasePort):

  def search(self, query, *args, **kwargs):
    return self.adapter.search(query, *args, **kwargs)
```

This code will work for python 2. If you want to use `ContractsMeta`
with python 3 you have to use function `with_metaclass` or write
`BasePort(object, metaclass=ContractsMeta)`:

```python
from contracts import contract, ContractsMeta, with_metaclass

  class BasePort(with_metaclass(ContractsMeta, object)):

    @abstractmethod
    @contract(query='str[>0]', returns='list(str)')
    def search(self, query, *args, **kwargs):
        pass
```

What I like in this library is a possibility to disable contracts by
calling `contracts.disable_all()` or using `DISABLE_CONTRACTS`
environmental variable.

Unfortunately, py.contracts doesn't provide way to use invariants but
you always can use `assert`.

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

```python
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

```python
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

```python
external_api.external_api_port.QueryError: QueryError(query cannot be empty)
```

Unfortunately, I couldn't find the way to declare contract for return
`zope.intefrace`. If you found one please let me know

I wanted to write about another library
[dpcontrancts](https://pypi.python.org/pypi/dpcontracts/0.1.0), but
unfortunately, I wasn't able to download it from PyPi.

When I was reading and reviewing material for previous posts I found out
that there is a way to use python standard library `abc.ABCMeta` for
contracts- I decided to give a try.

First, you have to know what are metaclasses: [understanding python
metaclasses](https://blog.ionelmc.ro/2015/02/09/understanding-python-metaclasses/)
and what are they needed for: [Why use Abstract Base Classes in
Python?](http://stackoverflow.com/questions/3570796/why-use-abstract-base-classes-in-python).

After this introduction let's jump straight to the code:

```python
import abc

class ExternalAPIPortMetaclass(object, metaclass=abc.ABCMeta):

    @abc.abstractmethod
    def search(self, query, *args, **kwargs):
        if not isinstance(query, str):
            raise ValueError('Query should be string')


class ExternalAPIPort(ExternalAPIPortMetaclass):

    def __init__(self, adapter):
        self.adapter = adapter

    def search(self, query, *args, **kwargs):
        super(ExternalAPIPort, self).search(query, *args, **kwargs)
        return self.adapter.search(query, *args, **kwargs)
```

What is happening here? I defined `ExternalAPIPortMetaclass` as a
metaclass that inherits from `abc.ABCMeta` (This code snippet is valid
for python 3). Then I decided to make abstractmethod called `search` so
all instances of that metaclass will have to provide such function.
Inside this code, I check whether provided query is a string or not. In
`ExternalAPIPort` which inherits from previously defined I have to call
super for `ExternalAPIPortMetaclass` search method. Thanks to that I can
make a validation of query. Right after that I return search
query.

What I don't like there is fact that I need to add additional line of
code inside `ExternalAPIPort.search` with `super` for checking
contract which can trick others. That's why I think that metaclasses and
contracts are two different topic besides that they have some pieces in
common (both are designed for telling: here I make contract that you
must obey).

To sum up this whole series I believe contracts are useful for telling
others that I made agreement that this function has to take and return
certain value. In python word where is so called duck typing and I don't
think they are necessary in every case but designing by contracts can be
helpful as I shown in examples.

Thank you for reading!

## Edits (01.08.2016):

- Add additional method for invoking metaclass in py.contracts (thanks
  to [mm_ma_ma](https://www.reddit.com/user/mm_ma_ma))

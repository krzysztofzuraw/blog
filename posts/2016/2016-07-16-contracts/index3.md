---
title: Design by contract in python- part three
date: '2016-07-31T10:00Z'
slug: '/blog/2016/design-by-contract-in-python-part-three'
tags:
  - python
  - design
  - contracts
---

**I covered py.contracts and zope.interface, now it's time to write
about abc module from python standard library.**

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
make a validation of query. Right after that I simply return search
query.

What I don't like there is fact that I need to add additional line of
code inside `ExternalAPIPort.search` with `super` just for checking
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

---
title: Design by contract in python- part one
date: '2016-07-16T10:00Z'
slug: '/blog/2016/design-by-contract-in-python-part-one'
tags:
  - python
  - design
  - contracts
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
with python 3 you have to use function `with_metaclass` or simply write
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

That's all for this blog post! Feel free to comment and in next week I
will look into another contract library in python.

## Edits (01.08.2016):

- Add additional method for invoking metaclass in py.contracts (thanks
  to [mm_ma_ma](https://www.reddit.com/user/mm_ma_ma))

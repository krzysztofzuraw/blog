---
title: Mocks and monkeypatching in python
pubDate: 2016-04-24
slug: 2016/mocks-and-monkeypatching-in-python
---

**Hello, in today's post I will look onto essential part of testing-
mocks.**

First of all, what I want to accomplish here is to give you basic
examples of how to mock data using two tools:
[mock](https://docs.python.org/3/library/unittest.mock.html) and [pytest
monkeypatch](https://pytest.org/latest/monkeypatch.html).

## Why bother mocking?

Some of the parts of our application may have dependencies for other
libraries or objects. To isolate behaviour of our parts we need to
substitue external dependencies. Here comes the mocking. We mock
external API to have certain behaviours such as proper return values
that we previously defined.

## Mocking function

Let's say we have module called `function.py`:

```python
def square(value):
    return value ** 2

def cube(value):
    return value ** 3

def main(value):
    return square(value) + cube(value)
```

Then let's look how these functions are mocked using `mock` library:

```python
try:
    import mock
except ImportError:
    from unittest import mock

import unittest

from function import square, main


class TestNotMockedFunction(unittest.TestCase):

    @mock.patch('__main__.square', return_value=1)
    def test_function(self, mocked_square):
        # because you need to patch in exact place where function that has to be mocked is called
        self.assertEquals(square(5), 1)

    @mock.patch('function.square')
    @mock.patch('function.cube')
    def test_main_function(self, mocked_square, mocked_cube):
        # underling function are mocks so calling main(5) will return mock
        mocked_square.return_value = 1
        mocked_cube.return_value = 0
        self.assertEquals(main(5), 1)
        mocked_square.assert_called_once_with(5)
        mocked_cube.assert_called_once_with(5)


if __name__ == '__main__':
    unittest.main()
```

What is happening here? Lines 1-4 are for making this code compatible
between python 2 and 3. In python 3 mock is part of standard library
whereas in python 2 you need to install by `pip install mock`.

In line 13 I patched the `square` function. But you have to remember to
patch it in the same place you use it. For instance, I'm calling
`square(5)` in test itself so I need to patch it in `__main__`. This is
the case if I'm running this by `python tests/test_function.py`. If I'm
using [pytest](https://pytest.org/latest/contents.html) for that I need
to patch it like `test_function.square`.

In lines 18-19, I patch `square` and `cube` functions in their module
because they are used in `main` function. The last two asserts come from
mock library and are for making sure that mock was called with proper
values.

The same can be accomplished using `mokeypatching` for py.test:

```python
from function import square, main


def test_function(monkeypatch):
    monkeypatch.setattr("test_function_pytest.square", lambda x: 1)
    assert square(5) == 1

def test_main_function(monkeypatch):
    monkeypatch.setattr('function.square', lambda x: 1)
    monkeypatch.setattr('function.cube', lambda x: 0)
    assert main(5) == 1
```

As you can see I'm using `monkeypatch.setattr` for setting up return
value for given functions. I'm still need to monkeypatch it in proper
place: `test_function_pytest` and `function`.

## Mocking classes

I have module called `square`:

```python
import math

class Square(object):
     def __init__(radius):
         self.radius = radius

     def calculate_area(self):
         return math.sqrt(self.radius) * math.pi
```

And mocks using standard lib:

```python
try:
    import mock
except ImportError:
    from unittest import mock

import unittest

from square import Square


class TestClass(unittest.TestCase):

    @mock.patch('__main__.Square') # depends in witch from is run
    def test_mocking_instance(self, mocked_instance):
        mocked_instance = mocked_instance.return_value
        mocked_instance.calculate_area.return_value = 1
        sq = Square(100)
        self.assertEquals(sq.calculate_area(), 1)


    def test_mocking_classes(self):
        sq = Square
        sq.calculate_area = mock.MagicMock(return_value=1)
        self.assertEquals(sq.calculate_area(), 1)

    @mock.patch.object(Square, 'calculate_area')
    def test_mocking_class_methods(self, mocked_method):
        mocked_method.return_value = 20
        self.assertEquals(Square.calculate_area(), 20)

if __name__ == '__main__':
    unittest.main()
```

At line 13 I patch class `Square` (again be aware if you run this test
using pytest or standard way). Lines 15 and 16 presents mocking
instance; at first `mocked_instance` is mock object which by default
returns another mock and to these `mock.calculate_area` I add
`return_value` 1. In line 23 I'm using `MagicMock` which is normal mock
class except it also retrieves magic methods from given object. Lastly I
use `patch.object` to mock method in `Square` class.

The same using pytest:

```python
try:
    from mock import MagicMock
except ImportError:
    from unittest.mock import MagicMock

from square import Square


def test_mocking_class_methods(monkeypatch):
    monkeypatch.setattr('test_class_pytest.Square.calculate_area', lambda: 1)
    assert Square.calculate_area() ==  1


def test_mocking_classes(monkeypatch):
    monkeypatch.setattr('test_class_pytest.Square', MagicMock(Square))
    sq = Square
    sq.calculate_area.return_value = 1
    assert sq.calculate_area() ==  1
```

The issue here is with `test_mocking_class_methods` which works well in
python 3 but not in python 2. Right now I don't have clear answer to
this so if you can help I appreciate this!

All examples can be found under this
[repo](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_mocks).

## References:

1.  [What is
    mocking](http://stackoverflow.com/questions/2665812/what-is-mocking).
2.  [Mocking Python With Kung Fu
    Panda](http://manishamde.github.io/blog/2013/10/06/mocking-python-with-kung-fu-panda/#mock_classes).

---
title: Python class @decorators
pubDate: 2016-01-29
slug: 2016/python-class-decorators
---

**Today post will be about syntactic sugar of python
language-decorators.I will concentrate on class decorators.**

Let's start with basic example of decorator defined by class in
`example_1`:

```python
class decorator(object):
    def __init__(self, func):
        self.func = func

    def __call__(self, *args):
        print('Called {func} with args: {args}'.format(func=self.func.func_name,
                                                       args=args))
        return self.func(*args)

@decorator
def func(x,y):
    return x,y

if __name__ == '__main__':
    func(1,2)
```

So running it results in:

```bash
$ python example_1.py
Called func with args: (1, 2)
```

But there is another special method that can be used in such cases:
`__get__`. This is used for example in implementation of
[cached_property](https://github.com/django/django/blob/master/django/utils/functional.py#L19)
decorator in django.

Let's look onto `example_2`:

```python
class property_(object):
    def __init__(self, func):
        self.func = func
        self.name = func.__name__

    def __get__(self, instance, cls):
        print(
            'Called property from {instance} ',
            'of {klass}'.format(instance=instance, klass=cls)
        )
        return self.func(instance)

    def __set__(self, obj, value):
        print(
            'Setting up {value} '
            'for {obj}'.format(value=value, obj=obj)
        )
        [setattr(obj, k, v) for k, v in value.items()]


class Apple(object):

    @property_
    def get_color(self):
        print('Accessing get_color property')
        return 'red'

if __name__ == '__main__':
    apple = Apple()
    print(apple.get_color)
    apple.get_color = {'shape':'triangle'}
    print(apple.shape)
```

What is happening here? Instead of implementing `__call__` we got access
to get the certain attribute. It's useful when we want to implement
logic to e.g properties. Here I implemented full descriptor. Running
this example results is this output:

```bash
$ python example_2.py
Called property from <__main__.Apple object at 0x7ff05de056d0> of <class '__main__.Apple'>
Accessing get_color property
red
Setting up {'shape': 'triangle'} for <__main__.Apple object at 0x7ff05de056d0>
triangle
Deleting <__main__.Apple object at 0x7ff05de056d0>
```

You can also decorate classes and functions at the same time. Consider
`example_3.py`:

```python
def decorator(F):
    def wrapper(*args):
        print('Called {}'.format(args))
    return wrapper

@decorator
def func(x, y):
    print(x,y)

class C(object):
    @decorator
    def method(self, x, y):
        print(x,y)

if __name__ == '__main__':
    c = C()
    c.method(1,2)
    func(3,4)
```

Running this:

```bash
$ python example_3.py
Called (<__main__.C object at 0x7f28ce438590>, 1, 2)
Called (3, 4)
```

Here the decorator wraps either class or function. In the first case
tuple with args contains only variables passed to the unction. In the
class call in args, there is also an instance of C class.

It's also possible to decorate whole classes, like in example_4:

```python
def decorator(cls):
    class Wrapper(object):
        def __init__(self, *args):
            self.wrapped = cls(*args)

        def __getattr__(self, name):
            print('Getting the {} of {}'.format(name, self.wrapped))
            return getattr(self.wrapped, name)

    return Wrapper

@decorator
class C(object):
    def __init__(self, x, y):
        self.x = x
        self.y = y


if __name__ == '__main__':
    x = C(1,2)
    print(x.x)
```

Output of `example\_4`:

```bash
$ python example_4.py
Getting the x of <__main__.C object at 0x7fed2468f750>
1
```

In this example, the class Wrapper on `__init__` calls the class with
args and store it under `self.wrapped`. So `cls(*args)` is the same as
`C(1,2)`.

Most of this examples are taken from book [Learning Python 5th
Edition](http://www.amazon.com/gp/product/1449355730?keywords=learning%20python%205th%20edition&qid=1454103755&ref_=sr_1_1&sr=8-1)
by Mark Lutz.

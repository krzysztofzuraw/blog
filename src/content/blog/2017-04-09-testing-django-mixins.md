---
title: Testing django mixins
pubDate: 2017-04-09
slug: 2017/testing-django-mixins
---

**You may read all these books and tutorials that tell you - test your
code! This blog post is to help you test your django mixins.**

## Why is it worth to test mixins?

You come to django world and you discover mixins - at the beginning, you
think it awesome! Let write more of those!

So you write this self-contained mixin - right now there is a time to
test it. It can assure that your piece of code works as expected and can
save you a lot of trouble.

Ok, you are ready to write some test. How to do it?

## How to test mixins?

Imagine that you have this simple `TemplateView` with mixin:

```python
from django.views.generic import TemplateView

class SomethingMixin(object):

    def get_context_data(self, **kwargs):
        context = super(SomethingMixin, self).get_context_data(**kwargs)
        context['has_something'] = True
        return context

class ExampleTemplateView(SomethingMixin, TemplateView):
    template_name = 'example.html'
```

`SomethingMixin` is adding a new key to the context. Let's write some
tests:

```python
from django.test import SimpleTestCase
from django.views.generic import TemplateView
from .views import SomethingMixin


class SomethingMixinTest(SimpleTestCase):

    class DummyView(SomethingMixin, TemplateView):
        pass

    def test_something_mixin(self):
        dummy_view = self.DummyView()
        context = dummy_view.get_context_data()
        self.assertTrue(context['has_something'])
```

I created a simple empty `DummyView` to use `SomethingMixin`. I'm using
only `TemplateView` because I don't need more advanced views to test if
a key is in context. In `test_something_mixin` I instantiate
`dummy_view`. Then take context test if it has a key that I'm interested
in.

And that's all! I have my mixin tested. If mixin become more
and more complex you may need more tests.

Feel free to comment! Examples based on this
[gist](https://gist.github.com/dnmellen/6507189).

---
title: Testing django template tags
pubDate: 2017-04-23
slug: 2017/testing-django-template-tags
---

**In this blog post I will give you simple example how to test your
template tags in django using django testing tools. Let's get started!**

## How to test templatetags?

Let say that you got this template tag under
`/templatetags/create_header.py` in django:

```python
from django import template

register = template.Library()


@register.inclusion_tag('example.html', takes_context=True)
def make_header(context):
    return {
    'header_title': context['title']
    }
```

This `make_header` tag will take the title from context and pass it
template tag. Right after that `example.html` will be rendered.

If you want to test if this template tag works you can use this:

```python
from django.test import SimpleTestCase
from django.template import Context, Template


class CreateHeaderTemplateTagTest(SimpleTestCase):

    def test_rendered(self):
    context = Context({'title': 'my_title'})
    template_to_render = Template(
        '{% load create_header %}'
        '{% make_header %}'
    )
    rendered_template = template_to_render.render(context)
    self.assertInHTML('<h1>my_title</h1>', rendered_template)
```

What is happening here? I setup `Context` instance with a proper
variable that will be taken by templatetag. After that I create
`Template`. I used the same syntax to include templatetags inside your
html files - they are templates for Django.

Below I render a template with context and check if my templatetag
renders correctly.

And that's all! I have my templatetag tested. Feel free to comment!

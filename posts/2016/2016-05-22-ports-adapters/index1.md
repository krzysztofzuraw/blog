---
title: Ports and Adapters in python - part two
date: '2016-06-05T10:20Z'
slug: '/blog/2016/ports-and-adapters-in-python-part-two'
tags:
  - django
  - python
  - design_patterns
---

**Last time I wrote about how to do simple port & adapter in python. In
this post, I will show to actually use them.**

I briefly remind you what is purpose of application build in this
series: user will log in, then search with keyword so he can save any
search result to database for read it later.

I decided to first implement search mechanism for Reddit. This is what I
will write today. Search request will be sent via GET. First, I need
some form to handle this:

```python
from django import forms
from django.conf import settings

from external_api.external_api_port import instantiated_port

class RedditSearchForm(forms.Form):
    query = forms.CharField(label='search query', max_length=100)

    def perform_search(self):
        search_result = instantiated_port.search(self.cleaned_data['query'])
        return search_result
```

I defined simple form that has only one field: `query` which is
`CharField` field with label. My form has one method `perform_search`.
In this method, I import instantiated reddit port that takes instance of
reddit adapter with settings from django settings module. Idealy this
adapter should be singleton class. This is how it looks in
`reddit_adapter`:

```python
from django.conf import settings

# reddit adapter class here ...

instantiated_adapter = RedditAdapter(
    settings.REDDIT_CLIENT_ID,
    settings.REDDIT_CLIENT_SECRET,
    settings.REDDIT_USERNAME,
    settings.REDDIT_PASSWORD
)
```

and in `external_api_port`:

```python
from .reddit_adapter import instantiated_adapter

# port class here ...

instantiated_port = ExternalAPIPort(instantiated_adapter)
```

Lastly, I perform the search using the port and `cleaned_data['query']`.
I have access to `cleaned_data` attribute after form validation which
will be shown in the view. At the end of `perform_search` I return
search results. These results are processed further in view:

```python
from django.views.generic.edit import FormView
from django.http import HttpResponse
from django.shortcuts import render
from .forms import RedditSearchForm

class RedditSearchView(FormView):
    template_name = 'search/index.html'
    form_class = RedditSearchForm
    success_url = 'add-to-favourites'
    search_result = None

    def get(self, request, *args, **kwargs):
        form = self.form_class(self.request.GET or None)
        if form.is_valid():
            self.search_result = form.perform_search()
        return self.render_to_response(self.get_context_data(form=form))

    def get_context_data(self, **kwargs):
        context = super(RedditSearchView, self).get_context_data(**kwargs)
        if self.search_result:
            context.update({
                'search_result': self.search_result,
                'sucess': True
                }
            )
        return context
```

Let begin from `get` method: this method is called every time get
request is performed by the user. How to ensure that? I used `method`
parameter in html:

```html
<form method="get" class="form" role="form">
  {{ form }}
  <input type="submit" class="btn btn-primary" value="Search" />
</form>
```

In `get` method I get the form for given `request.GET`. On this form I
call `form.is_valid()` to get access to `cleaned_data`. After that I
have search results so I can insert them to html. It is done via
`get_context_data` method when I get my basic context calling `super`.
And if there was search performed I update context with search results
and I tell my html to render them in one template.

Such updated context is taken by django and rendered to full html. Key
`success` is present because I got if statement in html template which
allows me to render results on the same page that search was performed:

```html
{% if sucess %}
    {% for item in search_result %}
        <li>{{ item }}</li>
    {% endfor %}
{% else %}
<!--- form here ---!>
```

And that basically all for search view. In next post I will take care of
saving results to database. Code for this you can find under this
[repo](https://github.com/krzysztofzuraw/reddit-stars).

## Changes from 07.06.16:

- Moving port & adapter to it's own module
- Having only one instance of port & adapter

(Special thanks for pointing this to Mariusz)

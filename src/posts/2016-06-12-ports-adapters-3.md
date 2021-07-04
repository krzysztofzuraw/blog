---
title: Ports and Adapters in python - part three
date: 2016-06-12
permalink: "/blog/2016/ports-and-adapters-in-python-part-three/index.html"
---

**Next part of my application will be module for saving links to read
them later.**

In the last post, I made a reddit search view for the specific keyword
that display results to the user. To save them to read later I need
database representation of link from reddit:

```python
from django.db import models

class RedditLink(models.Model):
    title = models.CharField(max_length=250)
    is_favourite = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if self.is_favourite:
            super(RedditLink, self).save(*args, **kwargs)
```

I made my own `save` because I only need links that are favorite in my
database. In addition, I have multiple reddit links on my search page to
save. So how to handle multiple forms of the same model in django? The
answer is to use `Fromset`. What is it? It is module provided by django
for creation multiple forms. How to use it? Look at `forms.py`:

```python
from django import forms
from .models import RedditLink

RedditAddToFavouritesFormset = forms.modelformset_factory(
    RedditLink,
    fields=('title', 'is_favourite'),
    extra=5
)
```

I used something called `forms.modelformset_factory` which is a function
to produce fromset from model. So I provided model name with fields to
calling this function. What is more, I add additional argument `extra`
for creating more than one form in formset. How to use newly created
`RedditAddToFavouritesFormset`? In views:

```python
from django.views.generic import CreateView
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse_lazy
from .forms import RedditAddToFavouritesFormset


class RedditAddToFavourites(CreateView):
    template_name = 'search/index.html'
    success_url = reverse_lazy('main_page')

    def post(self, request, *args, **kwags):
        reddit_links_formset = RedditAddToFavouritesFormset(request.POST)
        if reddit_links_formset.is_valid():
            reddit_links_formset.save()
            return HttpResponseRedirect(success_url)
        else:
            return self.render_to_response(
                'search/index.html',
                self.get_context_data(
                    reddit_links_formset=reddit_links_formset
                )
            )
```

I write `RedditAddToFavourites` which is a subclass of `CreateView`. The
main point for this view class is to create `RedditLink` instances from
formset. So I override `post` method which is responsible for handling
POST requests. At first I a create new instance of formset from the
request. After validation if everything was filled in correctly by the
user. If so I save formset and create entries in database. Then
`HttpResponseRedirect` redirect user to main page. If validation was
incorrect I rerender template with form errors. Thanks to that my
`search/index.html` looks as follows:

{% raw %}

```html
{% if sucess %}
<form method="post" action="{% url 'add_to_favourites' %}">
  {% csrf_token %}
  <table>
    {{ reddit_links_formset }}
  </table>
  <input type="submit" class="btn btn-primary" value="Favourite" />
</form>
{% else %}
```

{% endraw %}

To insert values that are from search I have to instantiate formset with
argument initial in `search/views.py` under `get_context_data` method:

```python
reddit_links_formset = RedditAddToFavouritesFormset(
    initial=[{'title': title} for title in self.search_result[:5]]
)
```

And that all! Right now when user type query to search bar and click
search he or she is redirected to page with 5 forms that have initial
title set. After that user select favorite links and saves them to
database. But I see a problem here: first, I only display for user 5
forms with data from search results and I want it more, but it is what I
will be taking care of in next blog post.

I really appreciate every comment that you have! You can reach me in any
way- just click icons at the bottom of this very page. Thank you for
reading! Code for this you can find under this
[repo](https://github.com/krzysztofzuraw/reddit-stars).

---
layout: layouts/page.html
title: Movies
eleventyNavigation:
  key: Movies
  parent: Footer
  order: 7
---

# Movies

<ul class="flex gap-4 flex-col list-disc mt-6">
{% for entry in movies %}
  <li class="flex flex-col md:justify-between md:flex-wrap md:flex-row">
    <p>{{ entry.title }} - {{ entry.rating }}/10 ({% rateToWords entry.rating %})</p>
    <time dateTime="{{entry.date | formatISO }}" >{{ entry.date | formatISO }}</time>
  </li>
{% endfor %}
</ul>

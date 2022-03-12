---
layout: layouts/page.html
title: TILs
eleventyNavigation:
  key: TILs
  parent: Header
  order: 3
---

# Today I learned

<ol class="flex gap-4 flex-col">
{% for entry in collections.tils | reverse %}
  <li class="flex flex-col md:justify-between md:flex-wrap md:flex-row">
    <a href="{{entry.url}}">{{ entry.data.title }}</a>
    <time dateTime="{{entry.date | formatDate }}" >{{ entry.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

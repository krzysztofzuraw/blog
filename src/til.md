---
layout: layouts/page.html
title: TIL
eleventyNavigation:
  key: TIL
  parent: Header
  order: 3
---

# Today I learned index

<ol class="flex gap-4 flex-col">
{% for entry in collections.tils | reverse %}
  <li class="flex flex-col">
    <a href="{{entry.url}}">{{ entry.data.title }}</a>
    <time dateTime="{{entry.date | formatDate }}">{{ entry.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

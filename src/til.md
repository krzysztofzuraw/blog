---
layout: layouts/page.html
title: TIL
eleventyNavigation:
  key: TIL
  parent: Header
  order: 3
---

# Today I learned index

<ol class="stack list">
{% for entry in collections.tils | reverse %}
  <li>
    <a href="{{entry.url}}">{{ entry.data.title }}</a>
    <time dateTime="{{entry.date | formatDate }}">{{ entry.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

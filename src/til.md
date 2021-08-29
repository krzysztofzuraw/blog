---
layout: layouts/page.html
title: TIL
eleventyNavigation:
  key: TIL
  parent: Header
  order: 3
---

# Today I learned

<ol class="list">
{% for til in collections.tils | reverse %}
  <li>
    <a href="{{ til.url }}">{{ til.data.title }}</a>
    <time dateTime={{ til.date | formatDate }}>{{ til.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

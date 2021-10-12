---
layout: layouts/page.html
title: TIL
eleventyNavigation:
  key: TIL
  parent: Header
  order: 3
---

# Today I learned index

<ol class="stack index">
{% for year, yearPosts in collections.tilsByYear %}
  <h2>{{ year }}</h2>
  <ol class="stack">
  {% for post in yearPosts | reverse %}
  <li>
    <a href="{{post.url}}">{{ post.data.title }}</a> -
    <time dateTime={{post.date | formatDateWithoutYear }}>{{ post.date | formatDateWithoutYear }}</time>
  </li>
  {% endfor %}
  </ol>
{% endfor %}
</ol>

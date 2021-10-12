---
layout: layouts/page.html
title: Books
eleventyNavigation:
  key: Books
  parent: Footer
  order: 5
---

# Books index

<ol class="stack index">
{% for year, yearPosts in collections.booksByYear %}
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

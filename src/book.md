---
layout: layouts/page.html
title: Books
eleventyNavigation:
  key: Books
  parent: Header
  order: 4
---

# Books index

<ol class="stack list">
{% for book in collections.books | reverse %}
  <li>
    <a href="{{book.url}}">{{ book.data.title }}</a>
    <time dateTime="{{book.date | formatDate }}">{{ book.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

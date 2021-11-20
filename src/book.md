---
layout: layouts/page.html
title: Books
eleventyNavigation:
  key: Books
  parent: Footer
  order: 5
---

# Books index

<ol class="stack list">
{% for book in collections.books | reverse %}
  <li>
    <time dateTime="{{book.date | formatDate }}">{{ book.date | formatDate }}</time>
    <a href="{{book.url}}">{{ book.data.title }}</a>
  </li>
{% endfor %}
</ol>

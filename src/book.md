---
layout: layouts/page.html
title: Books
eleventyNavigation:
  key: Books
---

# Books archive

<ol class="flex gap-4 flex-col">
{% for book in collections.books | reverse %}
  <li class="flex flex-col md:justify-between md:flex-wrap md:flex-row">
    <a href="{{book.url}}">{{ book.data.title }}</a>
    <time dateTime="{{book.date | formatDate }}">{{ book.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

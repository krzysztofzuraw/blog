---
layout: layouts/page.html
title: Books
eleventyNavigation:
  key: Books
  parent: Footer
  order: 6
---

# Books index

<ol class="flex gap-4 flex-col">
{% for book in collections.books | reverse %}
  <li class="flex flex-col">
    <time dateTime="{{book.date | formatDate }}">{{ book.date | formatDate }}</time>
    <a href="{{book.url}}">{{ book.data.title }}</a>
  </li>
{% endfor %}
</ol>
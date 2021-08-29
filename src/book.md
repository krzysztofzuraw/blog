---
layout: layouts/page.html
title: Books
eleventyNavigation:
  key: Books
  parent: Footer
  order: 5
---

# Books that I read

<ol class="list">
{% for book in collections.books | reverse %}
  <li>
    <a href="{{ book.url }}" lang={{ book.data.lang }}>{{ book.data.title }}</a>
    <time dateTime={{ book.date | formatDate }}>{{ book.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

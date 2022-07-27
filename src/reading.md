---
layout: page
title: Reading
eleventyNavigation:
  key: Reading
  parent: Header
  order: 2
---

# Reading

<ol class="stack list">
{% for book in collections.reading | reverse %}
  <li>
    <a href="{{ book.url }}">{{ book.data.title }}</a>
    <time dateTime="{{ book.date | toISO }}">{{ book.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

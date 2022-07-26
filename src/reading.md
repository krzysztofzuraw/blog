---
layout: page
title: Reading
eleventyNavigation:
  key: Reading
  parent: Header
  order: 2
---

<ol class="flex gap-4 flex-col">
{% for book in collections.reading | reverse %}
  <li class="flex justify-between gap-1">
    <a href="{{ book.url }}">{{ book.data.title }}</a>
    <time dateTime="{{ book.date | toISO }}" class="whitespace-pre tabular-nums">{{ book.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

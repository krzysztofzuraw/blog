---
layout: page
title: Writing
eleventyNavigation:
  key: Writing
  parent: Header
  order: 1
---

<ol class="flex gap-4 flex-col">
{% for post in collections.writing | reverse %}
  <li class="flex justify-between gap-1">
    <a href="{{ post.url}}">{{ post.data.title }}</a>
    <time dateTime="{{ post.date | toISO }}" class="whitespace-pre tabular-nums">{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

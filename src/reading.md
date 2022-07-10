---
layout: page
title: Reading
eleventyNavigation:
  key: Reading
  parent: Header
  order: 2
---

<ol class="stack list">
{% for post in collections.reading | reverse %}
  <li>
    <a href="{{ post.url}}">{{ post.data.title }}</a>
    <time dateTime="{{ post.date | toISO }}" >{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

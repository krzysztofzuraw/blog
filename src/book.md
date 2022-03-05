---
layout: layouts/page.html
title: Books
eleventyNavigation:
  key: Books
  parent: Footer
  order: 4
---

# Books

<ol class="flex gap-4 flex-col">
{% for post in collections.books | reverse %}
  <li class="flex flex-col md:justify-between md:flex-wrap md:flex-row">
    <a href="{{post.url}}">{{ post.data.title }}</a>
    <time dateTime="{{post.date | formatDate }}" >{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

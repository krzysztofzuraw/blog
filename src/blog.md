---
layout: layouts/page.html
title: Archive
eleventyNavigation:
  key: Archive
  parent: Header
  order: 1
---

# Blog archive

<ol class="flex gap-4 flex-col">
{% for post in collections.posts | reverse %}
  <li class="flex flex-col md:justify-between md:flex-wrap md:flex-row">
    <a href="{{ post.url}}">{{ post.data.title }}</a>
    <time dateTime="{{ post.date | formatDate }}" >{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

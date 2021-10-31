---
layout: layouts/page.html
title: Blog posts
eleventyNavigation:
  key: Blog
  parent: Header
  order: 2
---

# Blog index

<ol class="flex gap-4 flex-col">
{% for post in collections.posts | reverse %}
  <li class="flex flex-col">
    <time dateTime="{{post.date | formatDate }}">{{ post.date | formatDate }}</time>
    <a href="{{post.url}}" class="hover:underline">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ol>

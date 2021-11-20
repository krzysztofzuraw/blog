---
layout: layouts/page.html
title: Blog posts
eleventyNavigation:
  key: Blog
  parent: Header
  order: 2
---

# Blog index

<ol class="stack list">
{% for post in collections.posts | reverse %}
  <li>
    <time dateTime="{{post.date | formatDate }}">{{ post.date | formatDate }}</time>
    <a href="{{post.url}}">{{ post.data.title }}</a>
  </li>
{% endfor %}
</ol>

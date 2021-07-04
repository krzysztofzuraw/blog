---
layout: layouts/page.html
title: Blog index
eleventyNavigation:
  key: Blog
  parent: Header
  order: 2
---

# Blog index

<ol class="blog-list">
{% for post in collections.posts | reverse %}
  <li>
    <a href="{{post.url}}">{{ post.data.title }}</a>
    <time dateTime={{post.date}}>{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

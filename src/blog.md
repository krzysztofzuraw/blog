---
layout: layouts/page.html
title: Blog
eleventyNavigation:
  key: Blog
  parent: Header
  order: 1
---

# Blog

<ol class="stack list">
{% for post in collections.posts | reverse %}
  <li>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{ post.data.description }}</p>
    <time dateTime="{{ post.date | formatDate }}" >{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

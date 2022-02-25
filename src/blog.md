---
layout: layouts/page.html
title: Posts
eleventyNavigation:
  key: Posts
  parent: Header
  order: 1
---

# Posts

<ol class="stack list">
{% for post in collections.posts | reverse %}
  <li>
    <a href="{{post.url}}">{{ post.data.title }}</a>
    <time dateTime="{{post.date | formatDate }}" >{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

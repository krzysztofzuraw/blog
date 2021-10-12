---
layout: layouts/page.html
title: Blog posts
eleventyNavigation:
  key: Blog
  parent: Header
  order: 2
---

# Blog index

<ol class="stack index">
{% for year, yearPosts in collections.postsByYear %}
  <h2>{{ year }}</h2>
  <ol class="stack">
  {% for post in yearPosts | reverse %}
  <li>
    <a href="{{post.url}}">{{ post.data.title }}</a> -
    <time dateTime={{post.date | formatDateWithoutYear }}>{{ post.date | formatDateWithoutYear }}</time>
  </li>
  {% endfor %}
  </ol>
{% endfor %}
</ol>

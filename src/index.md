---
layout: page
title: Home
eleventyNavigation:
  key: Home
  parent: Nav
  order: 1
---

# Home

<ol class="stack" role="list">
  {% for post in collections.posts | reverse %}
  <li>
    <a href="{{ post.url}}">{{ post.data.title }}</a>
    <time datetime="{{ post.date | toISO }}">{{ post.date | formatDate }}</time>
  </li>
  {% endfor %}
</ol>

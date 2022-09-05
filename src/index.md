---
layout: page
title: Blog
---

# Blog

<ol class="stack list">
  {% for item in collections.blog | reverse %}
  <li>
    <a href="{{ item.url}}">{{ item.data.title }}</a>
    <time datetime="{{ item.date | toISO }}">{{ item.date | formatDate }}</time>
  </li>
  {% endfor %}
</ol>

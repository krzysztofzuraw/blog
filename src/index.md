---
layout: page
title: Home
eleventyNavigation:
  key: Home
  parent: Header
  order: 1
---

<h1>Home</h1>

{% set collection = collections.posts %}

<ol class="stack list">
  {% for item in collection | reverse %}
  <li>
    <a href="{{ item.url}}">{{ item.data.title }}</a>
    <time datetime="{{ item.date | toISO }}">{{ item.date | formatDate }}</time>
  </li>
  {% endfor %}
</ol>

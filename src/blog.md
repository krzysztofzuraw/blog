---
layout: layouts/page.html
title: Blog
eleventyNavigation:
  key: Blog
  parent: Header
  order: 1
---

# Blog

<form method="get" action="https://duckduckgo.com/" id="search">
  <label>Search: <input type="serach" name="q" /></label>
  <input type="hidden" name="sites" value="krzysztofzuraw.com" />
  <input type="submit" />
</form>

<ol class="stack list">
{% for post in collections.posts | reverse %}
  <li>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p>{{ post.data.description }}</p>
    <time dateTime="{{ post.date | formatDate }}" >{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

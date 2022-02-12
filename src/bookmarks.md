---
layout: layouts/page.html
title: Bookmarks
eleventyNavigation:
  key: Bookmarks
  parent: Footer
  order: 5
---

# Bookmarks index

<ul>
{% for entry in bookmarks.links %}
  <li>
    <a href="{{entry.url}}">{{ entry.title }}</a>
  </li>
{% endfor %}
</ul>

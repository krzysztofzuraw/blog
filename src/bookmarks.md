---
layout: layouts/page.html
title: Bookmarks
eleventyNavigation:
  key: Bookmarks
  parent: Footer
  order: 7
---

# Bookmarks index

<ul class="list-disc px-8">
{% for entry in bookmarks.links %}
  <li>
    <a href="{{entry.url}}">{{ entry.title }}</a>
  </li>
{% endfor %}
</ul>

---
layout: layouts/page.html
title: Blogroll
eleventyNavigation:
  key: Blogroll
  parent: Footer
  order: 6
---

# Blogroll

<ul class="stack">
{% for entry in blogroll %}
  <li>
    <a href="{{ entry.url }}">{{ entry.title }}</a>
  </li>
{% endfor %}
</ul>

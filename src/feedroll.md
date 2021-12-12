---
layout: layouts/page.html
title: Feedroll
eleventyNavigation:
  key: Feedroll
  parent: Footer
  order: 7
---

# Feedroll index

<ul class="stack list">
{% for feed in feedroll %}
  <li>
    <a href="{{ feed.url }}">{{ feed.title }}</a>
  </li>
{% endfor %}
</ul>

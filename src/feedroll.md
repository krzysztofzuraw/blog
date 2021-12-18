---
layout: layouts/page.html
title: Feedroll
eleventyNavigation:
  key: Feedroll
  parent: Footer
  order: 7
---

# Feedroll

Below you will find links to blogs/websites that I read in my RSS reader.

<ul class="flex gap-4 flex-col mt-8">
{% for feed in feedroll %}
  <li>
    <a href="{{ feed.url }}">{{ feed.title }}</a>
  </li>
{% endfor %}
</ul>

---
layout: layouts/page.html
title: Links
eleventyNavigation:
  key: Links
  parent: Header
  order: 3
---

# Links

<ol class="flex gap-4 flex-col">
{% for link in links | reverse %}
  <li class="flex flex-col md:justify-between md:flex-wrap md:flex-row">
    <a href="{{link.url}}">{{ link.title }}</a>
    <time dateTime="{{link.date | formatISO }}" >{{ link.date | formatISO }}</time>
  </li>
{% endfor %}
</ol>

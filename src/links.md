---
layout: page
title: Links
eleventyNavigation:
  key: Links
  parent: Header
  order: 2
---

<ol class="flex gap-4 flex-col">
{% for link in links | reverse %}
  <li class="flex justify-between gap-1">
    <a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.title }}</a>
    <time dateTime="{{ link.date | formatISO }}" class="whitespace-pre tabular-nums">{{ link.date | formatISO }}</time>
  </li>
{% endfor %}
</ol>

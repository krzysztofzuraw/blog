---
layout: page
title: Links
eleventyNavigation:
  key: Links
  parent: Header
  order: 3
---

# Links

<ol class="stack list">
{% for link in links | reverse %}
  <li>
    <a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.title }}</a>
    <time dateTime="{{ link.date | formatISO }}">{{ link.date | formatISO }}</time>
  </li>
{% endfor %}
</ol>

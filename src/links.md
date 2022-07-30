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
{% for link in collections.links | reverse %}
  <li>
    <a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.data.title }}</a>
    <time dateTime="{{ link.date | toISO }}">{{ link.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

---
title: RSS
layout: page
eleventyNavigation:
  key: RSS
  parent: Nav
  order: 4
---

# RSS

{% for feed, data in metadata.feeds %}

- [{{ data.title | replace("| Krzysztof Żuraw blog", "") }}]({{ data.path | url }})

{% endfor %}

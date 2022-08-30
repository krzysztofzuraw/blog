---
layout: post
title: RSS
eleventyNavigation:
  key: RSS
  parent: Header
  order: 6
---

Links to RSS feeds:

{% for feed, feedData in metadata.feeds %}

- [{{ feedData.title | replace('| Krzysztof Żuraw', '') }}]({{ feedData.path | url}})

{% endfor %}

---
layout: layouts/page.html
title: Links
eleventyNavigation:
  key: Links
  parent: Footer
  order: 5
---

# Links

Below you will find links from [raindrop.io](https://raindrop.io) that I saved for later reference.

<ul class="flex gap-4 flex-col mt-8">
{% for link in links %}
  <li>
    <h2 class="font-bold"><a href="{{ link.url }}">{{ link.title }}</a></h2>
    <p class="font-mono">{% for tag in link.tags %} #{{tag}} {% endfor %}</p>
  </li>
{% endfor %}
</ol>

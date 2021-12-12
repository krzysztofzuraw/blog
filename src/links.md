---
layout: layouts/page.html
title: Links
eleventyNavigation:
  key: Links
  parent: Footer
  order: 5
---

# Links

<ul class="stack list">
{% for link in links %}
  <li>
    <time datetime="{{ link.date | formatDateText }}">{{ link.date | formatDateText }}</time>
    <h2 class="link-header"><a href="{{ link.url }}">{{ link.title }}</a></h2>
    <p class="link-excerpt">{{ link.description }}</p>
  <p class="link-tags">{% for tag in link.tags %} #{{tag}} {% endfor %}</p>
  </li>
{% endfor %}
</ol>

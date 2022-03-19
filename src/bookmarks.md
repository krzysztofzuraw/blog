---
layout: layouts/page.html
title: Bookmarks
eleventyNavigation:
  key: Bookmarks
  parent: Footer
  order: 5
---

# Bookmarks

<ul class="flex gap-4 flex-col list-disc px-6">
{% for entry in bookmarks %}
  <li>
    <h2 class="underline font-bold"><a href="{{entry.url}}">{{ entry.title }}</a></h2>
    <p>{{ entry.description }}</p>
  </li>
{% endfor %}
</ul>

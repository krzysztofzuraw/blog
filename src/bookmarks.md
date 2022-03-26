---
layout: layouts/page.html
title: Bookmarks
eleventyNavigation:
  key: Bookmarks
  parent: Footer
  order: 6
---

# Bookmarks

<ul class="flex gap-4 flex-col list-disc">
{% for entry in bookmarks %}
  <li class="grid md:grid-cols-bookmarks md:gap-x-1">
    <a href="{{entry.url}}">{{ entry.title }}</a>
    <time dateTime="{{entry.date | formatISO }}" >{{ entry.date | formatISO }}</time>
    <p>{{ entry.domain }}</p>
  </li>
{% endfor %}
</ul>

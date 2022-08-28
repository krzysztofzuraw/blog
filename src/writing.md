---
layout: page
title: Writing
eleventyNavigation:
  key: Writing
  parent: Header
  order: 1
---

<h1 class="mb-8 text-4xl font-extrabold lg:text-5xl">{{ title }}</h1>

<ol class="flex flex-col gap-4">
  {% for item in collections.writing | reverse %}
  <li class="grid justify-between gap-1 md:flex">
    <a href="{{ item.url}}">{{ item.data.title }}</a>
    <time datetime="{{ item.date | toISO }}" class="whitespace-pre tabular-nums"
      >{{ item.date | formatDate }}</time
    >
  </li>
  {% endfor %}
</ol>
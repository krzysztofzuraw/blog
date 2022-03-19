---
layout: layouts/page.html
title: Articles
eleventyNavigation:
  key: Articles
  parent: Footer
  order: 6
---

# Articles

Below you articles that I starred in [Feedbin](https://feedbin.com).

<ul class="flex gap-4 flex-col list-disc px-6 mt-6">
{% for entry in articles %}
  <li>
    <h2 class="underline font-bold"><a href="{{entry.url}}">{{ entry.title }}</a></h2>
  </li>
{% endfor %}
</ul>

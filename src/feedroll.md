---
layout: layouts/page.html
title: Feedroll
eleventyNavigation:
  key: Feedroll
  parent: Footer
  order: 5
---

# Feedroll

<p class="font-serif mb-4">Below you will find links to blogs/websites that I read in my RSS reader.</p>

<ul class="flex gap-4 flex-col list-disc font-serif pl-5">
{% for entry in feedroll %}
  <li>
    <a href="{{entry.url}}" class="hover:underline">{{ entry.title }}</a>
  </li>
{% endfor %}
</ol>

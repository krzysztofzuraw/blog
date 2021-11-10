---
layout: layouts/page.html
title: Links
eleventyNavigation:
  key: Links
  parent: Footer
  order: 4
---

# Links

<p class="font-serif mb-8">
Below you will find links from <a href="https://raindrop.io/" class="hover:underline">raindrop.io</a> that I saved for later reference.</p>

<ul class="flex gap-12 flex-col">
{% for bookmark in bookmarks %}
  <li class="flex flex-col gap-2">
    <h2 class="hover:underline font-bold text-3xl lg:text-4xl border-b-2 mb-2 pb-1">
      <a href="{{bookmark.url}}">{{ bookmark.title }}</a>
    </h2>
    {% if bookmark.excerpt %}<p class="font-serif">{{ bookmark.excerpt }}</p>{% endif %}
  <p class="font-mono text-sm">{% for tag in bookmark.tags %} #{{tag}} {% endfor %}</p>
  </li>
{% endfor %}
</ol>

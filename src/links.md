---
layout: layouts/page.html
title: Links
eleventyNavigation:
  key: Links
  parent: Footer
  order: 4
---

# Links

Below you will find links from [raindrop.io](https://raindrop.io) that I saved for later reference.

<ul class="stack list">
{% for bookmark in bookmarks %}
  <li>
    <h2>
      <a href="{{bookmark.url}}">{{ bookmark.title }}</a>
    </h2>
    {% if bookmark.excerpt %}<p class="bookmark-excerpt">{{ bookmark.excerpt }}</p>{% endif %}
  <p class="bookmark-tags">{% for tag in bookmark.tags %} #{{tag}} {% endfor %}</p>
  </li>
{% endfor %}
</ol>

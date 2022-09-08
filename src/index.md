---
layout: page
eleventyNavigation:
  key: Writing
  parent: Header
  order: 1
---

# Writing

<ol class="stack list">
  {% for post in collections.writing | reverse %}
  <li>
    <a href="{{ post.url}}">{{ post.data.title }}</a>
    <time datetime="{{ post.date | toISO }}">{{ post.date | formatDate }}</time>
  </li>
  {% endfor %}
</ol>

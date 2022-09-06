---
layout: page
eleventyNavigation:
  key: Home
  parent: Header
  order: 1
---

# Posts

<ol class="stack list">
  {% for post in collections.posts | reverse %}
  <li>
    <a href="{{ post.url}}">{{ post.data.title }}</a>
    <time datetime="{{ post.date | toISO }}">{{ post.date | formatDate }}</time>
  </li>
  {% endfor %}
</ol>

---
layout: layouts/page.html
---

# Blog index

<ol class="stack list">
{% for post in collections.posts | reverse %}
  <li>
    <a href="{{ post.url}}">{{ post.data.title }}</a>
    <time dateTime="{{ post.date | formatDate }}" >{{ post.date | formatDate }}</time>
  </li>
{% endfor %}
</ol>

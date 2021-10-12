---
layout: layouts/page.html
title: RSS feeds
eleventyNavigation:
  key: RSS
  parent: Footer
  order: 3
---

# RSS feeds

<ul class="stack">
  <li>
    <a href="{{ metadata.feed.paths.posts | url }}">Blog posts</a>
  </li>
  <li>
    <a href="{{ metadata.feed.paths.books | url }}">Books</a>
  </li>
  <li>
    <a href="{{ metadata.feed.paths.tils | url }}">TILs</a>
  </li>
</ul>

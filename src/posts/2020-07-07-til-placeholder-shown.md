---
title: Placeholder shown CSS selector
date: 2020-07-07
permalink: '/blog/2020/placeholder-shown/index.html'
---

Today I learned about `:placeholder-shown` selector in CSS.
What is doing? It is selecting those inputs - if you are gonna use it as `input:placeholder-shown`
which currently has a placeholder. It works on all browsers except IE11. When it can be useful?

For styling input with float label + placeholder. See the example below (works on chrome/safari) -
see line 55 inside this codepen:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="css-tricks" data-slug-hash="XVBLRM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Float Labels with :placeholder-shown">
  <span>See the Pen <a href="https://codepen.io/team/css-tricks/pen/XVBLRM">
  Float Labels with :placeholder-shown</a> by CSS-Tricks (<a href="https://codepen.io/css-tricks">@css-tricks</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

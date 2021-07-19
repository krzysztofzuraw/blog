---
title: Migrating blog to Eleventy
date: 2021-07-19
permalink: "/blog/2021/migrating-blog-to-11ty/index.html"
---

I recently migrated my blog to [Eleventy](https://www.11ty.dev/). My previous engine for generating static site was
[Gatsby.js](https://www.gatsbyjs.com/). Why change then? Problem with gatsby was that it was really slow. And I mean that.
To start development server on my Macbook Air 2019 I had to wait a bit for gatsby to start. The same
was with deployment to [Netlify](https://www.netlify.com/). What was good? Image handling and plugin system. For every stuff
you may need you could plug gatsby plugin something and in most cases it worked. Why 11ty then?
I turns out that it is pretty fast and I really like to going back to some basic HTML, CSS & JS. I have
to admit that after being in React land it was nice to just throw bunch of [nunjucks](https://link)
templates and render website.

The main pain-point for me was a migration process. Firstly 11ty handles images differently than gatsby
does. By default it expects you to have a folder `img` which then can be copied passthrough by 11ty.
What I did was:

- copy images to `src/img`
- convert them to wepb + use blog post dates as a prefix.

Gatsby in the other hand is coping through images linked inside markdown. To accomplish that in 11ty
you can use [eleventy-plugin-page-assets](https://www.npmjs.com/package/eleventy-plugin-page-assets).

Because of migrating images to `src/img` I had to migrate image references in markdown files as well.
Instead of using image syntax for markdown: `![alt](path)` I"m using nunjucks [shortcode](https://www.11ty.dev/docs/shortcodes/).
For example by using this shortcode inside markdown:

{% raw %}

```md
{% img "Path without extension", "Alt text", "Figcaption text" %}
```

{% endraw %}

Under the hood shortcode is setting HTML [figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) with figcaption & clickable image (snippet from 11ty config):

```js
config.addShortcode("img", (path, alt, figcaption) => {
  return `<figure>
       <a href="/img/${path}.webp" target="_blank" rel="noopener">
        <img src="/img/${path}.webp" loading="lazy" alt="${alt}">
      </a>
      <figcaption>${figcaption}</figcaption>
    </figure>`;
});
```

What I like here with shortcode is a way of abstracting stuff. I can change how `img` shortcode is
defined and all images in all files will be affected by change in one place.

I had to cleanup a markdown [frontmatter](https://www.11ty.dev/docs/data-frontmatter/) as well. Besides migrating from date & time to only date
I had to rename slug to permalink. As a last step I removed tags from frontmatter - I really did not
used them much. Thanks to VS Code regex search & replace I was able to do it automatically. I learned that you
can capture a regex group by putting `()` around expression and use it inside replace as `$1`.
Super helpful!

```text
// find & replace example with regex capture group
slug: '(.\*)' // find
permalink: '$1/index.html' // replace by
```

That is all for now! In this blog post I wrote about my experience with migrating blog from Gatsby
to Eleventy and what I learned a long the way.

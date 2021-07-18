---
title: Migrating blog to Eleventy
date: Last Modified
permalink: "/blog/2021/migrating-blog-to-11ty/index.html"
---

I recently migrated my blog to [Eleventy](). My previous engine for generating static site was
[Gatsby.js](). Why change then? Problem with gatsby was that it was really slow. And I mean that.
To start development server on my Macbook Air 2019 I had to wait a bit for gatsby to start. The same
was with deployment to [Netlify](). What was good? Image handling and plugin system. For every stuff
you may need you could plug gatsby plugin something and in most cases it worked. Why 11ty then?
I turns out that it is pretty fast and I really like to going back to some basic HTML, CSS & JS. I have
to admit that after being in React land it was nice to just throw bunch of [nunjucks](https://link)
templates and render website.

The main painpoint for me was a migration process. Firstly 11ty handles images differently than gatsby
does. By default it expects you to have a folder `img` which then can be copied passthrought by 11ty.
What I did was: copy images to `src/img`, convert them to wepb & use blog post dates as a prefix.

Gatsby in the other hand is coping through images linked inside markdown. To accomplish that in 11ty
you can use [eleventy-plugin-page-assets](https://www.npmjs.com/package/eleventy-plugin-page-assets).

Because of migrating images to `src/img` I had to migrate image references as well in markdown files.

* Shorcode

{% raw %}
```md
{% img "Path without extension", "Alt text", "Figcaption text" %}
```
{% endraw %}

Shorcode under the hood:

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
 nice abstraction. To select image path I'm using alfred snippet workflow to search `src/img` directory
 for images.

I had to cleanup a markdown frontmatter as well. I dont need: date with time - I only need date. 11ty uses
permalink instead of slugs & I do not care about tags for blog posts. Thanks to VS Code regex search
& replace I was able to do it autoamticaly. Below you will find what I've used. I also learned that you
can capture a regex group - like in the date example: `(._)` and use it inside replace as `$1`.
Super helpfull!

```text
date: '(._)T._'
date: $1

slug: '(.\*)'
permalink: '$1/index.html'

tags:(.|\n)+?
---
```

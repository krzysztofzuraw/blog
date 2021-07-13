---
title: Migrating blog to 11ty
date: Last Modified
spellcheck: off
permalink: "/blog/2021/migrating-blog-to-11ty/index.html"
---

* Migrated blog to evenlty - 11ty
* Gatsby was good - especialy image handling
* 11ty is fast
* I dont need JS on my site yet
* It is HTML & CSS and it is really nice to write it
* Migration was hard
  * 11ty handles images diffrently by default - you provide a folder with images and they are copied through
  * gatsby do it automaticly by coping images linked inside markdown - you can have the same in 11ty by using this extension
  * What I did: copied images from posts into `src/img`, convert them to webp & use inside blog posts using shorcode

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


---
title: Migrating blog to Astro
description: Why, how and if it was worth it to migrate my blog to Astro
pubDate: 2023-02-12T12:32:45Z
slug: 2023/migrating-blog-to-astro
---

I recently migrated my blog to [Astro](https://astro.build/). I'm writing this post to share my experience.

# Why

I really liked my previous engine - [Eleventy](https://www.11ty.dev/). It was fast, simple and easy to use. But sometimes it felt like I was fighting with it. I had to use [Nunjucks](https://mozilla.github.io/nunjucks/) template to create a pages. Which is not bad but I like [JSX](https://reactjs.org/docs/introducing-jsx.html) way more. I had a problem with formatting Nunjucks with Prettier as well. I wanted to try [Tailwind](https://tailwindcss.com/) and I had to write whole pipeline for it to work. When [Astro 2.0](https://astro.build/blog/astro-2/) came out I decided to give it a try. What turn me in? I think ability to type my markdown files with [Zod](https://zod.dev/). I also like the idea of using JSX like engine to create pages with proper TypeScript support.

# How

I started with creating a new project with astro CLI. It was a is smooth experience and out of the box experience. Also adding new plugins is seamless. Then I migrated my markdown files into MDX - in order to make sure that I can use [@astrojs/image](https://docs.astro.build/en/guides/integrations-guide/image/) to have responsible images. I'm also impressed by speed of generating those images - it is both quick on my Macbook and on Netlify. I also added Tailwind with [typography](https://tailwindcss.com/docs/typography-plugin) plugin and it works like a charm. I tweak a bit my MDX frontmatter and I was ready to go live. What I really like was [RSS](https://docs.astro.build/en/guides/rss/) plugin - I even added nice looking CSS to it and I learned that it is possible - you can read about it in [this](https://docs.astro.build/en/guides/rss/#adding-a-stylesheet) section.

# Was it worth it?

I think so. I'm really happy with the result. I'm not sure if I will use Astro for my next project but I will definitely use it for my blog.

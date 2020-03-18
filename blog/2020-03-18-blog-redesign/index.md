---
title: What I learned from redesigning my blog
date: '2020-03-18T17:08:03.284Z'
slug: '/blog/2020/blog-redesign'
tags:
  - css
  - html
  - redesign
---

When I type `blog redesign` into Google I've got a lot of links why redesigning your blog can be a
great idea for my business. They also are saying if we should have social media sharing buttons or
not or if you need a free ebook to build connections.

My blog redesign was made out of selfish reasons - I want to learn something
about CSS layout. Every version of my blog was using a template of some sort:
At first, I've used [starter gatsby](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)
then I used one by [panr](https://github.com/panr/gatsby-starter-hello-friend). (Awesome theme by the way!).
It wasn't anything wrong with them but I fell that I'm not learning anything from doing those redesigns.

What is more, I've recently completed [What the Flexbox](https://flexbox.io/) course and I wanted to try my new
knowledge in practice.

But what is the best place to practice if not things that you actually use?

That is why I did small changes to how the blog looks.

At first, I was using [Postcss](https://postcss.org/) with CSS modules. Really nice stuff but I do not need all
those preprocessors? I was thinking about a new cool kid in the block - one of many CSS-in-JS libraries.
But then I started thinking about what I really need from my CSS? I do not plan to have a dynamically changed
theme - do I really need all those tools? That is why I picked the most basic of them all importing CSS from React files:

```tsx
import '../styles/layout.css';

export const Layout: React.FunctionComponent = ({ children }) => {
  return <div>{children}</div>;
};
```

It works well for my case and I do not need external dependencies or libraries. Another approach that
I've tried is to have minimal CSS and left the rest to default styles from the browser. I get this idea
after seeing [Web Design in 4 minutes](https://jgthms.com/web-design-in-4-minutes/).

In my CSS I mostly do some layouts in a flexbox (so I can practice it), centering and setting fonts.

## What I learned?

I've learned about attribute selectors from this [Frontend Masters course](https://frontendmasters.com/courses/css-grids-flexbox/).
The idea is as follows - I select all `a` tags that have a target other than my domain & add ↗️ to the end link description:

```css
a[href^="http://"]:not([href*="krzysztofzuraw.com"]):after,
a[href^="https://"]:not([href*="krzysztofzuraw.com"]):after {
  content: ' ↗️';
}
```

Currently, there is a trend in web development to have both white & black themes. I decided to have them too.
For that reason I've used CSS variables:

```css
:root {
  --textColor: #555;
  --headerColor: #333;
  --backgroundColor: #fff;
  --linkColor: #4299e1;
}
```

By default, they are for the white theme but I'm using [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --textColor: #f8f8f2;
    --headerColor: #bd93f9;
    --backgroundColor: #282a36;
    --linkColor: #8be9fd;
  }
}
```

Where I'm doing override those colors to [Dracula Theme](https://draculatheme.com/) one.

I've changed the layout of my blog to use `flexbox` and it currently works fine. This was the first example
outside of course where I could try laying out elements on the page using flexbox. I have experience
with flexbox before but it was mostly to center elements inside some container.

I've also removed google analytics script & discuss comments. I've created a small form (you can see
it at the end of this post) to see if my readers actually want comments on my blog. I will see what
are results in the following weeks.

## Summary

I've changed my blog layout to use `flexbox` and I've learned about [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
as well as [prefers-color-schema](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

---
layout: layouts/post.html
title: About
date: 2022-01-14
eleventyNavigation:
  key: About
  parent: Header
  order: 2
---

Welcome to my blog. A few words about me:

- self taught frontend developer with 5+ years of experience
- specialize in building React & TypeScript websites/web-apps
- leading one of the dev teams at Ingrid
- learning about CSS & design
- brewing specialty coffee using V60

I like giving back to community by being a mentor of [Django Girls](https://djangogirls.org/) or
[Geek Girls Carrots](https://gocarrots.org/). I like to organize events - I’m co-organizer of
[Wrocław TypeScript meetup](https://www.meetup.com/pl-PL/WrocTypeScript/) and
[Django Girls Wrocław](https://djangogirls.org/wroclaw/). If you need help with preparing tech event do not hesitate to contact me.

## Where you can find me

{% for entry in metadata.social %}
- [{{ entry.title }}]({{ entry.url }})
{% endfor %}

## What I'm doing now

- Resting and embracing slow life
- Taking care of shetland sheepdog
- Leading one of the teams at [Ingrid](https://ingrid.com)

## What I'm using

- Safari for private and Brave for work with DuckDuck Go
- Apple Reminders/Calendar
- VSCode with SF Mono font and GitHub theme
- Raycast
- Apple Music
- NewsNetWire for RSS
- Tadam
- StopTheMaddness

### Colophon

This website is build with 11ty. 

My writing is copyrighted. Feel free to ask if you want to reuse any content beyond the bounds of fair use.

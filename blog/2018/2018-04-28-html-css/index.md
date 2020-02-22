---
title: Lessons learned from coding TM Conference website
date: "2018-04-28T10:12:03.284Z"
slug: "/blog/2018/lessons-learned-from-tm-conference-website.html"
tags:
    - html
    - css
---

**Recently I was less active on my blog mainly because I had a lot of side projects that I was doing. Today I want to share with you lessons learned from doing one.**

### Wroclaw LevelUp conference website

I was asked by my friend from local Wrocław toastmasters to prepare a simple website for a local conference. As I was just starting out in HTML & CSS world I saw this as an opportunity to be better in those areas. As I was progressing through I learned a couple of lessons that I want to share with you.

### Lesson 1 - don’t try to reinvent the wheel

It may seem that this saying for this section was said 100x times but I say it one more time. When I decided to do this website, first I ask my friend if this needs a dynamic data. It wasn’t so I picked stack: plain HTML & CSS. I could use bootstrap or [tailwindcss](tailwindcss.com) but I don’t and it kicked me later.

At the beginning everything was fine - I was writing my CSS as usual but then I found out that I need to support both mobile & desktop screen resolutions. Writing media queries in plain CSS was a tricky and even me - author of the code started to get lost. Not to mention auto-prefixing.

Next time I will start with some existing frameworks or components and then build from that.

### Lesson 2 - CMSing

I was fortunate that my friend has some coding knowledge so he could easily change or add some pieces of content to the website. If not him I have to do it by myself which was proven to be a bit flustrating when you have a pile of text to write.

### Lesson 3 - Static websites

I learned that doing this website as a static was a good idea - I don’t have a backend to be worried about, my page is loading fast and it is just plain HTML. Next time I will use static websites + CMS to handle such job.

### Summary

During this project, I learned a couple of lessons that for sure help me during another side projects. What about you? Have you ever learned such lessons from your own projects? Btw my website is [here]([Level Up Wrocław](https://quirky-lichterman-a17d51.netlify.com/)

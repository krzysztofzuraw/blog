---
title: TIL - how height:auto works
pubDate: 2020-12-02
slug: 2020/til-how-height:auto-works
---

import BlogPostImage from "~components/BlogPostImage.astro";

Today I learned a bit more on how `height:auto` works. Let's say you have a box that has
implicit `height` & `width` set to `250px`. Inside this box you place 1px by 1px image.
You give image `height: auto`. What is happening? This image is taking whole 250px height!

![1x1 px box](../../assets/2020-12-02-1.jpg)

But you do the same with image 250px by 1px (250px width by 1px height) - image is taking only 1px height.

![250x250px box](../../assets/2020-12-02-250.jpg)

So if you want your image to take only 1px with `height:auto` make sure that such image has full width
of parent.

You can see example in this [codepen](https://codepen.io/krzysztofzuraw/pen/oNzXEGY).

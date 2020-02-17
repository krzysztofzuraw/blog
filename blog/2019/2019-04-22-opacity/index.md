---
title: Hiding elements with opacity
date: '2019-04-22T09:12:03.284Z'
slug: '/blog/2019/hiding-elements-with-opacity.html'
tags:
  - opacity
  - css
  - hiding elements
---

# Problem

Recently I had a task that requires me to show an icon when a user hovers over a certain element and hide
it after the user leaves the page.

## Display none to the rescue

At first, I tried to use `display: none` as a default and `display: block` on hover. Yet it did not
work because when an element is `display: none` it will not take space. In other words, hovering over it
will result is resizing the contents of the parent element. It wasn't looking good so I keep looking.

## Opacity for the win

After I asked my colleague from work - he gave me a wonderful tip - use `opacity`. What exactly `opacity`
is doing? According to MDN it tells browser is element is visible or not. Opacity can be number
between 0 and 1. 0 means that element is no visible (but is still taking its place). 1 means
that element is fully visible. Elements between 0 and 1 forces element to be a bit dimmed and not
fully visible.

I applied opacity - and it does its job! An element is no longer visible but it is still taking its space.

## Summary & TL;DR

You want to hide an element on the web page but you still want it to keep its space? Use `opacity: 0` to
hide and `opacity:1` to show HTML element.

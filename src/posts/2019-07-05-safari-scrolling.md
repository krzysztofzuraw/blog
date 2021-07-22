---
title: Safari scrolling error
date: 2019-07-05
permalink: "/blog/2019/safari-scrolling-error/index.html"
---

If you are developing applications for modern web you ultimately run into problems between different
browsers.

Some of them are simple - like adding specific vendor prefix to your CSS. Yet there
is one category of bugs that can cause sleepless nights and hours of debugging.

Those are **interactions** bugs.

In today blog post I want to write about two errors of that kind that we came across in [Ingrid](https://www.ingrid.com).

## Background

At Ingrid we are building widgets that clients embed on their site. Implementation wise widgets are
iframes that developers are injecting on checkout pages.

One time during testing of new version of our widget we find out that something is wrong.
When user opens modal on safari desktop and wanted to scroll they can easily do it if they are using mouse.

If is happens that they are using build-in mac os touchpad - they were without luck. Scrolling was blocked until next page reload.

For us developers it was one of the weirdest bug to reproduce and fix. You need osx, safari and
touchpad. You need to play a little on webpage - scrolling or clicking to bug started show up.

### How to debug safari issues

What helps us with pinpointing possible problems was `paint flashing`. What it is?

It is a toggle in safari devtools that once enabled it will hurt your eyes with red boxes. They
appear when the repaints are occurring.

Repaints occurs when webpage is changing `visibility` or `background` of an element. Then browser
needs to verify visibility of other nodes in DOM tree thus this operation is expensive.

You can turn on `paint flashing` in safari here:

{% img "2019-07-05-repaint", "Repaints in safari", "Repaints in safari" %}

What we found was that user can't scroll but repaints were occurring.

This gives us idea to look into how we block background of modal from scrolling in safari.
If you don't know having modal in safari will cause background to scroll like here:

{% img "2019-07-05-body", "Safari scroll", "Safari scroll" %}

## Summary & TL;DR

It turns out that our solution to blocking body scroll was breaking scrolling of content in modal
itself (only for safari, mac with touchpad).
We switch to [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock#readme) and that fixed
the problem.

What are your experience with developing web apps that has to run of Safari? Do you have any errors?
You can write to me at krzysztofzuraw(at)fastmail.com.

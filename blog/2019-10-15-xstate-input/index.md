---
title: Using Xstate with inputs in React
date: '2019-10-15T09:12:03.284Z'
slug: '/blog/2019/xstate-inputs-react'
tags:
  - xstate
  - inputs
  - react
---

<!-- 1. Intro -->

In this blog post I want to present how you can use [XState](https://xstate.js.org/) to make
styling inputs in React easier to maintain. You can find code on [codesandbox](https://codesandbox.io/s/xstate-input-2df4o).
Before you start reading this tutorial I recommend to read about state machines on [statecharts.github.io](https://statecharts.github.io/).
Also Geddski [blog post](https://gedd.ski/post/state-machines-in-react/) is good place to start too.

<!-- TOC here -->

<!-- 2. Body -->

Imagine that you work on new inputs for company website. Designers handle you document with how input should look like:

![design](./design.png)

In picture above there are a few states that input can have and what are transitions between them.

You start implementing designs but you quickly realize that something is wrong: you started seeing
a lot of similar flags in your code: `isFocused && !isHover && !hasValue`. On current level of complicity
it is nothing wrong them.

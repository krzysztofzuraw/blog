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
a lot of similar flags in your code: `isFocused && !isHover && !hasValue`. There is nothing wrong with
those feature flag except one thing - you can easily mix up different states and end up with input
state that should not be possible.

How you can to better?

What if you can use different approach and have only one single of truth with ability to prevent
impossible states?

Let me introduce you to [Xstate](https://xstate.js.org/). As you may noticed we gonna use statecharts
to represent input logic. Let's draw one:

![statecharts](./statecharts.jpg)

We gonna have two parallel state machines:

- First one for changing the border of input
- Second one for displaying or hiding input label

Let's start with the first one: changing the border. To use xstate you need to first initalize state
machine:

```tsx{numberLines: true}
import { Machine, assign } from 'xstate';

const inputMachine = Machine({
  initial: 'enabled',
  context: {
    border: '1px solid #e6e6e6',
  },
  states: {
    // highlight-line
    enabled: {
      on: {
        ENTER: {
          target: 'hover',
          actions: assign({
            border: () => '1px solid #cccccc',
          }),
        },
      },
      entry: assign({ border: () => '1px solid #e6e6e6' }),
    },
    hover: {
      on: {
        ENTER: {
          target: 'focused',
          actions: assign({ border: () => '3px solid #56dcd1' }),
        },
        EXIT: 'enabled',
      },
    },
    focused: {
      on: {
        EXIT: 'enabled',
      },
    },
  },
});
```

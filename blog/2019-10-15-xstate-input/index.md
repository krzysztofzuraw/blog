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

Let's start with the first one: changing the border. To use xstate you need to first initialize state
machine. I will do it with input states:

```tsx
import { Machine } from 'xstate';

const inputMachine = Machine({
  initial: 'enabled',
  states: {
    enabled: {},
    hover: {},
    focused: {},
  },
});
```

So far so good. Let's then add what are possible transitions between states:

```tsx
import { Machine } from 'xstate';

const inputMachine = Machine({
  initial: 'enabled',
  states: {
    enabled: {
      on: {
        ENTER: 'hover',
      },
    },
    hover: {
      on: {
        ENTER: 'focused',
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

I've added here possible transitions:

- enabled => hover
- hover => focused
- hover => enabled
- focused => enabled

You can change the names of transitions (`ENTER` or `EXIT`) to your likeing - it's important
to be consistent because you gonna use them later.

Xstate comes with [visualizer](https://xstate.js.org/viz) so you can generate statemachine diagram
by yourself:

![diagram](./xstate_basic.png)

You can also use this [link](https://xstate.js.org/viz/?gist=008d1fa65626a14e0fae318f3dc5fc9a).

We have transitions ready - now it the question what is changing during those transitions? It this
case are border of input. I could add logic behind calculating border to `render` of my component
but I prefer to keep it inside state machine. For that I need [context](https://xstate.js.org/docs/guides/context.html#initial-context):

```tsx
import { Machine, assign } from 'xstate';

const inputMachine = Machine({
  initial: 'enabled',
  context: {
    border: '1px solid #e6e6e6',
  },
  states: {
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

Inside `context` object I put my initial border value. To change it I use my previously defined transitions. In Xstate there is a way to trigger actions when state machine transitioning from one state to the other. This is a `actions` property on `ENTER` object. For example: on transitioning from `enabled` to `hover` I [assign](https://xstate.js.org/docs/guides/context.html#assign-action) border to new value. In definition of `enabled` state there is also `entry` property - this is a neat way of reseting border to it's initial value when state machine is entering `enabled` state.

This is how it looks like in [visualizer](https://xstate.js.org/viz/?gist=dec8d4bef401557829457f44ffb929b3):

![assign-machine](./assign-machine.png)

I have `inputMachine` ready but I need one more piece of functionality.
Ability to show and hide label based on input having value. I decided
that it will different state machine:

```tsx
const labelMachine = Machine({
  initial: 'blank',
  context: {
    opacity: 0,
  },
  states: {
    blank: {
      on: {
        ENTER: { target: 'value', actions: assign({ opacity: () => 1 }) },
      },
      entry: assign({ opacity: () => 0 }),
    },
    value: {
      on: {
        EXIT: 'blank',
      },
    },
  },
});
```

Logic here is the same as in previous example but I'm changing `opacity`
on state transitions. [Diagram](https://xstate.js.org/viz/?gist=e689e1c045769d47137a8338639e715a) also looks the same:

![label-machine](./label-machine.png)

I have machines ready - now it is the time to use them in react component:

```tsx
import { useMachine } from "@xstate/react";

function App() {
  const [value, setValue] = React.useState("");
  const [currentInputState, transitionInputState] = useMachine(inputMachine);
  const [currentLabelState, transitionLabelState] = useMachine(labelMachine);

  return (
    <>
      <div>
        <label
          htmlFor="name"
          style={{
            // rest of styles here
            opacity: currentLabelState.context.opacity // take current value from context
          }}
        >
          Name:
        </label>
        <input
          style={{
            // rest of styles here
            border: currentInputState.context.border // take current value from context
          }}
          id="name"
          value={value}
          onChange={event => {
            transitionLabelState("ENTER");
            setValue(event.target.value);
          }}
          onMouseEnter={() => transitionInputState("ENTER")}
          onMouseLeave={() => {
            if (!currentInputState.matches("focused"))
              transitionInputState("EXIT");
          }}
          onClick={() => {
            transitionInputState("ENTER");
            transitionLabelState("ENTER");
          }}
          onBlur={() => {
            transitionInputState("EXIT");
            if (!value) transitionLabelState("EXIT");
          }}
        />
      </div>
  );
}
```

To get access to state of machine and transition it to different states you need `useMachine` hook.
It takes machine itself as an argument. Transitioning are done via `transitionInputState` & `transitionLabelState`
which take events name (it this case `ENTER` & `EXIT`). The rest of logic is to handle different
html events on input and transition` them to different states.

# Summary

In this blog post I showed how to implement logic around changing input border and labels with [Xstate](https://xstate.js.org/).
You can find code (with TypeScript types) on this [codesandbox](https://codesandbox.io/s/xstate-input-2df4o).

What are your take on state machines? Do you like this short introduction to xstate with react?
Let's write in comments.

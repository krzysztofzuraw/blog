---
title: Stack & Column in CSS-in-JS
date: 2020-11-06
permalink: "/blog/2020/stack-column-css-in-js/index.html"
---

Today I want to write more about new emotion components that we try at [Ingrid](https://www.ingrid.com/). Those components help us with spacing.

## The problem

I want to implement this footer:

{% img "2020-11-06-example-layout", "Footer to implement", "Footer to implement" %}

It has a logo, text in two rows and horizontal space between them. It sounds not bad.
I added a logo, then left margin and in the end two rows of text. Or I can use css grid to have the same effect.

Yet after two weeks requirements change and I don't need to display the telephone number to the user if there is no enough data. In this case, I won't render this component. Yet I have a problem - `margin-top` between `contact our support` & `at 555-555-555`.
I can either refactor that to grid/flexbox with a `gap` instead of `margin-top` (the best way) or I can add conditional inside my [css prop](https://emotion.sh/docs/css-prop) telling emotion to reset `margin-top` to 0 (the worst way). In the worst case, my code started to look like spaghetti, in the best case in mix flexbox or grid definitions with margins, colours & fonts making my code less readable.

## Solution

What is solution for this problem? Use specialised components. Specialised component has one task - to give spacing and make sure that elements lay in the place where they should be. Below you will find example of those specialised components in action:

```tsx
<Columns space="0.5rem" alignY="flex-start">
  <img src="logo.svg" />
  <Stack space="0">
    <p>Contact our support</p>
    <p>at 555-555-555</p>
  </Stack>
</Columns>
```

I now have `Columns` component to create columns from its children - in my case `img` and `Stack`. `Stack` is making sure that `p` children have spacing between them.

What are the pros? I have a nice abstraction that can be shared across a team of people. I can point my teammates into those components when they need to create other combinations of layouts. Because this is abstraction I can think about layouts as a combination of different boxes (which is HTML sense they are). I found it much easier to combine them, reason about them, or change them. I can move my focus to other pieces of frontend instead of fighting layout & spacing.

Below you can find an example implementation of `Columns` & `Stack` components in emotion + react:

{% raw %}

```tsx
import * as React from "react";

type Props = {
  space: "string"; // it can be typeof keyof Theme['spacing']
};

export const Stack: React.FunctionComponent<Props> = ({ children, space }) => {
  return (
    <div
      css={{
        "> * + *": {
          marginTop: space,
        },
      }}
    >
      {children}
    </div>
  );
};
```

{% endraw %}

{% raw %}

```tsx
import * as React from "react";

type Props = {
  space: "string"; // it can be typeof keyof Theme['spacing']
};

export const Columns: React.FunctionComponent<Props> = ({ children, space }) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        "> * + *": {
          marginLeft: space,
        },
      }}
    >
      {children}
    </div>
  );
};
```

{% endraw %}

HTML examples can be found on [codepen](https://codepen.io/krzysztofzuraw/pen/GRqrwEG).

## Summary

In this blog post, I wrote on how one can use `Stack` & `Columns` components for creating layouts.

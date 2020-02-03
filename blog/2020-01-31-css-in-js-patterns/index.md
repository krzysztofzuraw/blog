---
title: CSS in JS patterns
date: '2020-01-31T16:49:03.284Z'
slug: '/blog/2020/css-in-js-patterns'
tags:
  - css-in-js
  - patterns
---

# Opening

## Why

I have read a lot of articles about CSS in JS. Yet majority of them are just some introductory articles
why having CSS in JS is a nice thing. So I decided to write my own blog post with CSS-in-JS patterns
that I either heard, used or currently using while working with CSS in JavaScript.

## For whom

This blog post is for those who knows what is CSS-in-JS. Patterns listed here supports theming.
And can create `styled` component or use CSS `prop`.
I'll be using only one library here - [emotion.js]().

# Body

## Present patterns

- Styled Prop

The first pattern is the most basic - you take your `div`, `a` and other HTML tags and wrap them
using `styled` function. If you have following structure:

```tsx
<div>
  <h1>Header</h1>
  <p>Description</p>
</div>
```

Then you create corresponding components wrapped in styled:

```tsx
<Card>
  <Header>Header</Header>
  <Description>Description</Description>
</Card>;

const Card = styled('div');
const Header = styled('h1');
const Description = styled('p');
```

At work we have whole application written using `styled` components and in the beginning it seems
like really nice pattern, yet if you don't rethink how you want reuse your components you will end
up having a lot a duplication. This is our problem right now as we need to maintain whole file next
to component that have all CSS-in-JS definitions. It is easy to read but if you need to change some
padding or color you need to dive deep into `style.tsx` file and search for your particular component.

- Styled Classes

Here you have still `styled` component - but it is used only on the top level component. The rest
is using either `classNames` or CSS selectors. Going back to previous example:

```tsx
<div>
  <h1>Header</h1>
  <p>Description</p>
</div>
```

You will end up with:

```tsx
<Card>
  <h1 className="header">Header</h1>
  <p>Description</p>
</Card>;

const Card = styled('div', () => ({
  '.header': {
    // styles applied to header class
  },
  '& > p': {
    // styles applied to p tag via CSS selector
  },
}));
```

This is our current solution for having CSS-in-JS. It is not perfect - as sometimes we need to have
header of different color based on some prop. Then we add new prop into `Card`, and pass it down for
calculation:

```tsx
const Card = styled('div', props => ({
  '.header': {
    color: props.useWhite ? 'white' : 'red',
  },
}));
```

Which not only have a problem with mental congnition about why `Card` should have `useWhite` prop and
why the heck it is needed here? Also you need to use [shouldForwardProp]() as React will start shouting
at you for passing down the `useWhite` custom prop to HTML element.

Benefit of this pattern is that you have one `styled` component that holds truth about your CSS.

- CSS Prop

# Conclusion

## Summary and why

## TL;DR

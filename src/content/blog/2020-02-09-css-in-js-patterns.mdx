---
title: CSS in JS patterns
pubDate: 2020-02-09
slug: 2020/css-in-js-patterns
---

I have read a lot of articles about CSS in JS. Yet majority of them are some introductory articles
or why having CSS in JS is a nice thing. So I decided to write my own blog post with CSS-in-JS patterns
that I either heard, used or am currently using while working with CSS in JavaScript.

This blog post is for those who known basic of CSS-in-JS: `styled` component or what is CSS `prop`. I'll be using only one library here - [emotion](https://github.com/emotion-js/emotion).

## Styled Component

The first pattern is the most basic - you take your `div`, `a` and other HTML tags and wrap them
using `styled` function. If you have following structure:

```html
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

const Card = styled("div");
const Header = styled("h1");
const Description = styled("p");
```

At my job in [Ingrid](https://www.ingrid.com/) we have whole application written using `styled` components and in the beginning it seems
like really nice pattern, yet if you don't rethink how you want to reuse your components you will end
up having a lot a duplications.

This is our problem right now as we need to maintain whole file next
to component that have all CSS-in-JS definitions. It is simple to read but if you need to change some
padding or color you need to dive deep into `style.tsx` file and search for your particular component.

## Styled Component with CSS classes

Here you have `styled` function - but it is used only on the top level component. The rest
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

const Card = styled("div", () => ({
  ".header": {
    // styles applied to header class
  },
  "& > p": {
    // styles applied to p tag via CSS selector
  },
}));
```

This is our current solution for having CSS-in-JS. It is not perfect - as sometimes we need to have
header of different color based on some prop. Then we add a new prop into `Card`, and pass it down for
calculation:

```tsx
const Card = styled("div", (props) => ({
  ".header": {
    color: props.useWhite ? "white" : "red",
  },
}));
```

Which not only have a problem with mental cognition about why `Card` should have `useWhite` prop and
why the heck it is needed here? Also you need to use [shouldForwardProp](https://emotion.sh/docs/styled#customizing-prop-forwarding) as React will start shouting at you for passing down the `useWhite` custom prop to HTML element.

Benefit of this pattern is that you have one `styled` component that holds truth about your CSS.

## CSS Prop

The last pattern is taking advantage of having `css` prop available on any of HTML tag. If we look
a the example:

```tsx
<div>
  <h1>Header</h1>
  <p>Description</p>
</div>
```

Using `css` prop we will have:

```tsx
<div
  css={
    color: componentProps.useWhite ? 'white' : 'red',
  }
>
  <h1 css={theme => ({ color: theme.black })}>Header</h1>
  <p css={descStyles}>Description</p>
</div>
```

Benefit of it is that there is no need to add `shouldForwardProp` - you can take all data directly
from context of component. As you can see in above example the first argument to `css` is a `theme`
object that can contains [emotion-theming]() values.

If you are using TypeScript you will need to type `theme` via `css={(theme: Theme) => ({})}` instead
of having typed `styled` if you are using this [guide]().

I haven't used this pattern in production code but I see some drawback from beginning - what if you
start using `css` prop too much? Then you will end up with a long HTML tags that have both logic of
rendering and styling. One of solution for that problem is to extract styles to its own variable as
is done with `p` tag in example above.

## Conclusion

You can check all of those examples in more complicated scenarios in [code-sandbox](https://codesandbox.io/embed/css-in-js-patterns-zz7ns):

In this blog post I wanted to present 3 CSS-in-JS patterns:

- styled prop. This is the easiest one to use but has a problem with having a lot of boilerplate to
  write and maintain the code.

- styled classes. This is somewhat in the middle between styled & css prop. You create main wrapper
  with `styled` and then inside its definition use CSS selectors to style tags inside. It has smaller
  boilerplate but question is still here - how should you structure your code?

- css prop. This is pattern I haven't used yet. It seems like a nice way of writing CSS-in-JS but
  I have to try it first.

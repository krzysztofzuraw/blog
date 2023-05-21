---
title: Polymorphic components in React
description: Review of different polymorphic techniques for React components
pubDate: 2023-05-20T14:07:32Z
slug: 2023/polymorphic-components-in-react
---

While I was working on the design system I knew I wanted to use [polymorphic components](https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#polymorphic-components-eg-with-as-props) as the foundation of it. It turns out that are a couple of approaches that you can use to create one. I will review them in this post.

## Dessert Box

As I wrote in a [blog post](https://krzysztofzuraw.com/blog/2023/polymorphic-react-component-with-vanilla-extract/) about polymorphic components with vanilla extract I was looking for a way to create polymorphic components with vanilla extract. I was recommended to check out the [dessert box](https://github.com/TheMightyPenguin/dessert-box) library. It uses a concept of vanilla-extract [sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/) and connect them together with polymorphic `Box` component.

After a couple of months of using it, I can say that it works fine. It is not perfect, but it is good enough. I like that you can import `Box` and construct your own components on top of it. Thanks to that it is way easier for users of your design system to use it.

The biggest problem is that you have weak typing of HTML attributes when using the dessert box. What does it mean? Let's say you have this `Box` defined:

```tsx
export const Form = () => {
  return <Box as="form">// rest of the form</Box>;
};
```

You can pass any prop to `<Box as="form">` right now - it can be `onSubmit` handler (which you may need) or `type="text"` (which made no sense in this context).

## Radix asChild

Component library Radix is using a different approach. They have [`asChild`](https://www.radix-ui.com/docs/primitives/utilities/slot) utility. Let's say you have this component:

```tsx
import * as Label from "@radix-ui/react-label";
import { Text } from "../Text"; // your design system component

<Label.Root className="LabelRoot" htmlFor="firstName" asChild>
  <Text>First name</Text>
</Label.Root>;
```

By passing `asChild` prop you are telling Radix to pass all its props to the child component. It is really handy because you can use your design system components without any wrappers. You also get better typing than with `Box` from dessert box from HTML attributes as TypeScript will know if you `type="text"` defined on `<input/>` component or not. The downside? You need to make sure that your component takes `ref`. You also get a bit of mess in your code which can be misleading for people who are not familiar with Radix.

## CVA approach

There is a new library called Class Variance Authority - (CVA for short). While this is more of a replacement for vanilla-extract recipe I think it is worth mentioning here. What if you could export your styles as a recipe and use them in your components instead of using `as` or `asChild`?
For example:

```tsx
import { button } from "./components/button"; // CVA styles

export const Button = ({ children }) => {
  return (
    <button className={button} type="submit">
      {children}
    </button>
  );
};
```

You get the best of both worlds - you have strong typing of HTML attributes and the composability of HTML tags. This seems like a nice idea but I have to test it in real world scenario.

### Summary

I think that all of the approaches for creating polymorphic components have their pros and cons. I think that I will stick with the dessert box for now, but I will keep an eye on CVA and Radix `asChild`.

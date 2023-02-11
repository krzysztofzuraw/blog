---
title: Polymorphic react component with vanilla-extract
pubDate: 2023-01-21T11:24:10Z
slug: 2023/polymorphic-react-component-with-vanilla-extract
---

I started using [vanilla-extract](https://vanilla-extract.style/) library as foundation to design system at work. All is going well, but I have one problem - I couldn't find a good way to create polymorphic React components. I tried with [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#polymorphic-components-eg-with-as-props), but it didn't work for me. I was looking for a solution for a while and I was recommended (thanks Jonatan) to check out this handy little library called [dessert-box](https://github.com/TheMightyPenguin/dessert-box). What this library is doing? It uses a concept of vanilla-extract [sprinkles](https://vanilla-extract.style/documentation/packages/sprinkles/) and connect them together with polymorphic `Box` component.

Let's say you have this sprinkles defined:

```ts
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: [{ brand: "#00a98f" }],
  },
});

export const sprinkles = createSprinkles(colorProperties);
```

Now you want to pass those as atoms to your `Box` component. You can do it like this:

```tsx
import { createBox } from "@dessert-box/react";

import { sprinkles } from "./sprinkles.css";

export const Box = createBox({ atoms: sprinkles });
```

Now you can use it like this:

```tsx
<Box as="button" color="brand">
  Submit
</Box>
```

And it is all type-safe. You can't pass different `color` than `brand` to the `Box`. Now you can build your own components on top of it and combine them into more complex [molecules](https://atomicdesign.bradfrost.com/chapter-2/). It really helps to write as little custom CSS as possible and instead use typed props to style your components.

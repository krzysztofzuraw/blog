---
title: Compiling Tailwind CSS components in monorepo
date: 2022-07-05T15:09:45Z
---

If you have monorepo with Tailwind CSS components in one package and application in the other you may find that Tailwind won't work for components. To fix that you need to add new entry to `content` inside `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}", // here is path to Tailwind CSS components package
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

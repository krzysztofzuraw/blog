---
title: Setting up simple React & TypeScript project
date: 2019-03-11
---

## Hello 👋🏻

It's have been a long time since I last wrote my last blog post.
But don't worry I back and in the first blog post I give you
a small template so if you are interested in working with React & TypeScript please join me!

## Why

You may ask yourself why even bother adding a new template
when there is so much already existing? The answer is simple - because I can.
I also have an idea about presenting changes in this template as my project will grow so you can
see what was added and why.

## Template

It is nothing magical over there: you have [parcel-bundler](https://parceljs.org) that is doing the most of the work. You plug `index.tsx` like you can see in `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TypeScript + React with Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="app"></div>

    <script src="src/index.tsx"></script>
  </body>
</html>
```

One more important config to look into is `tsconfig.json` which tells TypeScript compiler how to compile a project. The most important entry from the point of type-safely is:

```json
"strict": true,
```

followed by:

```json
"noUnusedLocals": true,
"noUnusedParameters": true,
"noImplicitReturns": true,
"noFallthroughCasesInSwitch": true,
```

Type-safely means that you have to put more hard work into typing your application (like ensuring there are no implicit anys) but in reward of having fewer bugs in runtime. I encourage you to enable it every time.

As we are still in tsconfig - there is one entry called `plugin` where I put [typescript-tslint-plugin](https://github.com/Microsoft/typescript-tslint-plugin). This little fella will run tslint plugin from Microsoft in your VSCode. If you don't use VSCode - you can remove this one line.

Next to `tsconfig` is `tslint.json` - linter for TypeScript files configured to follow recommended [rules](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts) and prettier one. This `tslint-config-prettier` entry should be the last in `extends` array to ensure that prettier will format code according to tslint.

I've added also a [jest](https://jestjs.io/) for testing with [ts-jest](https://www.npmjs.com/package/ts-jest) that enables TypeScript support to unit test files.

## Summary & TL;DR

I give you TypeScript + React with Parcel playground:

- [Codesandbox](https://codesandbox.io/s/38lvk3x7l5)
- [Github](https://github.com/krzysztofzuraw-dot-com/react-typescript-parcel)

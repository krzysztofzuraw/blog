---
title: Open sourcing tsconfig
date: 2019-04-08
---

## Hi again 🖖

Today I want to write about the thing that we did in my work. I currently work at [Ingrid](https://www.ingrid.com/). All of your codebases is written in TypeScript which is using `tsconfig` as a way
to tell the compiler what to do. Most of tsconfig is the same for all of your project
so we decided to open source it 🎉.

## Why

You may ask why do such a thing? A first argument is that we can enforce good practices
for all of our codebase. If there is a new setting - we can adjust it in one place and
all the project will have it.

This is also the first step in making our internal ts-guide. We already have a common
prettier config. The next step will be to add Ingrid tslint rules.

## How can you use it

Because it is open source you can use it in your own project by installing it:

```shell
npm install --save-dev @ingridab/tsconfig
```

and extending your own configuration:

```json
{
  "extends": "@ingridab/tsconfig",
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "~src/*": ["src/*"]
    },
    "plugins": [
      {
        "name": "typescript-tslint-plugin"
      }
    ]
  }
}
```

## Summary & TL;DR

The company that I work for open sourced their [tsconfig](https://www.npmjs.com/package/@ingridab/tsconfig).
You can use it in your own project too! What are the other
tools or configs that your company open sourced? Please write in the comments!

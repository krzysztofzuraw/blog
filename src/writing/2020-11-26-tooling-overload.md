---
title: Tooling overload in JS
date: 2020-11-26
---

Before I start let me clarify what I mean by tooling in the context of programming language: all ecosystem of tools/libraries/frameworks that are needed to use with a given programming language.

When I’m thinking about tooling and how cumbersome it can be the first thing that comes to my mind is JavaScript. You probably heard of the black hole of node modules or [days since the last JavaScript framework website](https://dayssincelastjavascriptframework.com/). It means that either ecosystem is a black mess with a huge dependency list and new dependencies come every day.

{% img "2020-11-26-node-weight", "Node modules in the heaviest" %}

## Why is that?

I read somewhere that JavaScript as an ecosystem is a baby. It means that we have many [responsibilities](https://css-tricks.com/the-widening-responsibility-for-front-end-developers) and so little knowledge about how to handle such a range of responsibilities. Where can we learn? Maybe we can look into other languages - how & what they are doing?

I think you expect me to write about how beautifully other languages are doing the things that JavaScript cannot or not yet done. Sorry to disappoint you - but I don’t. I think I don’t know enough yet to do this. But I can give an example of my journey with one piece of the tooling ecosystem - bundlers.

## Example from my work

I wanted to develop React & Typescript application. In a typical situation,you expect me to use something like [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html). I personally like to set up my own tooling and choose parts of the toolchain instead of being surprised when I eject.

I choose a [parcel](https://parceljs.org/) as a main piece of the toolchain.‌ Why? It is the easiest to start and I don’t need to write any config. I added [ant design](https://ant.design/) too.

Two weeks of development passed and I need to render the [Table](https://ant.design/components/table/#header). I import it via `import {Table} from 'antd'` and tried to run the project in development mode. I got an error telling me that `parcel` can’t create a JavaScript bundle. I started searching around the web for this problem.

After a while, I found a corresponding issue inside ant design GitHub repository. The main conclusion was that table won’t work with `parcel`. I checked issue tracker inside `parcel` repository to see that issue was stale. I had two options there - either fix the issue or change the bundler to one that works with antd.

I choose webpack as it is a recommend bundler to use with antd. I have to migrate the application from parcel to webpack. I started by adding TypeScript and Babel plugins & configs. After that, I need to add [emotion.js](https://emotion.sh/) babel plugins in proper versions in order for `css prop` to work. I the meantime I forgot about `less` loader for antd - I had to add it as well.

It took about 3 hours of running `webpack` server, fixing building errors, fixing TypeScript errors but in the end I made it!. No errors from `tsc`, no errors from `eslint` (which setup requires additional 5 packages in order it to work with TS), no errors from `npm run dev`. I’m done here 🎉.

Until the next update of webpack or babel or any part of the toolchain.

## Summary

This was a mind dump about the tooling ecosystem in JavaScript world. I wrote about my problems with ant design in conjunction with `parcel`. Takeaway? It is hard but we are moving in a good direction.

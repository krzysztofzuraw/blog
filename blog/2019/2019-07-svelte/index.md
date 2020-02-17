---
title: Side project with svelte
date: '2019-07-15T09:12:03.284Z'
slug: '/blog/2019/svelte.html'
tags:
  - svelte
  - framework
  - javascript
---

I recently found out article on [HN](https://www.thefutureoftheweb.com/blog/svelte-is-the-most-beautiful-framework-ive-ever-seen) about this new cool kid in the JavaScript
world - [Svelte](https://svelte.dev/).
As I was reading through the blog post I decided to play a little bit of my own with this framework.
In this short blog post I will write my findings from this side project.

You don't need prior knowledge before reading this material but knowledge of TypeScript or JavaScript will help.

## Idea

My idea was to build simple application that will take [GeoJSON](https://geojson.org/) and display
points on the map.

**Yes I know** that it can be done in pure JavaScript and in any other framework but I decided that I will do it in Svelte.

I want it to be quick side project, so I jump into the code straight away (I did some 60s tutorial to svelte).

One of my main perquisites was that I want to do it in TypeScript.

I found some scaffolded template. I installed it. Everything was looking fine.

I started coding some basic logic of my application in `App.svelte`
(this is format of files that framework is expecting).

## TypeScript support

Yet after a while I found out that my types are missing!. I can declare new variable - it has proper types. Yet when I try to use it - my types are gone!

![types](./types.png)

The same code in normal `.ts` file works fine.

It may be connected with the fact that `.svelte` files can consist of at most 3 parts:

```js
<script></script> // this is where all JavaScript logic is kept
<style></style> // css styles per component
<div></div> // pure html with some handlers and block logic from framework
```

Summary: TypeScript support - no.

## Syntax

Let's go to the next part - syntax.
I'm really curious why people want to get away from JSX and it's DOM manipulation?
Instead of having:

```jsx
<div>{showComponent && <Component />}</div>
```

You have:

```svelte
{#if showComponent}
  <Component />
{/if}
```

Personally I find it strange to write custom templates instead of JavaScript code.

### Ease of development

[Svelte](https://svelte.dev/tutorial/basics) tutorial is really good in explaining basic concepts of framework.
It even has a [section](https://svelte.dev/tutorial/context-api) where you can find example of what
I tried to accomplish - render points on the map.

I also really liked ease of setting all up - you just run one command to scaffold the folder for you and you are ready to start developing!

### What I did not tried

My [application](https://wroclaw-guide.noaaln.now.sh/) do not need svelte main strength - reactivity. At least in this stage of development. Thus I cannot say how it is compared to other frameworks.

### Summary & TL;DR

I tired to use Svelte framework in my [pet project](https://wroclaw-guide.noaaln.now.sh/). It was interesting journey.

#### I liked

- development experience
- tutorial
- bundle size in production

#### What I didn't like

- TypeScript support
- Syntax

Did you tried Svelte? What was your take on that?

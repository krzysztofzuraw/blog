---
title: You don't know promises
date: "2018-03-02T10:12:03.284Z"
slug: "/blog/2018/you-do-not-know-promises.html"
tags:
    - javascript
    - promises
---

**Recently I receive book recommendation. There was one chapter in this book series about Promises
that I cannot handle. Examples written there were not enough for me - I decided to play with Promises on my own.**

Of course, this books is [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS). If you didn't
read it before reading this blog post I encourage you to read those book series. This blog post
is an addition to the chapter about [promises](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch3.md).

The first example is simple `fetch`:

```js
fetch('https://httpbin.org/get?name=krzysztof')
  .then(response => response.json())
  .then(json => console.log(json))
```

It is using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to get json response
from httpbin. Nothing serious here besides fetching data from external API and unpacking it to JSON.

## Promises in the race

The second example is using `Promise.race`:

```js
const fetchName = name =>
  fetch(`https://httpbin.org/get?name=${name}`)
    .then(response => response.json())
    .then(json => json)

const fetchLastName = lastName =>
  fetch(`https://httpbin.org/get?lastname=${lastName}`)
    .then(response => response.json())
    .then(json => json)

const race = Promise.race([fetchName('krzysztof'), fetchLastName('zuraw')])
race.then(value => console.log(value)).catch(err => console.log(err))
```

In the beginning, I added functions that allow me to have my code reused. The most
important part here is `race` declaration.

What is `Promise.race` doing? It waits for first of provided promises to resolve and `console.log`
this value.

I also catch error so if I have my function that I always failing:

```js
const fetchLastNameWithError = lastName =>
  fetch(`https://htpbin.org/get?lastname=${lastName}`)
    .then(response => response.json())
    .then(json => json)

const raceWithError = Promise.race([
  fetchName('krzysztof'),
  fetchLastNameWithError('zuraw'),
])
raceWithError
  .then(value => console.log(value))
  .catch(err => console.log('Error in race: ', err))
```

I will get `Error in race: TypeError: Failed to fetch`.

## Mega promise

What if I want to get data from two sources and used it later? I can use `Promise.all`:

```js
const allResults = Promise.all([fetchName('krzysztof'), fetchLastName('zuraw')])

allResults.then(values => {
  const [fetchNameResponse, fetchLastNameResponse] = values
  console.log(
    `My name is ${fetchNameResponse.args.name} ${
      fetchLastNameResponse.args.lastname
    }`
  )
})
```

It will wait until all promises provided to `all` call resolve and logs: `My name is krzysztof zuraw`.
Here is a tricky part - what if `fetchLastName` response comes first before `fetchName`? As it turns
out the order of Promises added to `all` call is preserved.

Similarly as in `Promise.race` throwing an error results in stopping at first rejection:

```js
const allResultsWithError = Promise.all([
  fetchName('krzysztof'),
  fetchLastNameWithError('zuraw'),
])
allResultsWithError
  .then(values => {
    const [fetchNameResponse, fetchLastNameResponse] = values
    console.log(
      `My name is ${fetchNameResponse.args.name} ${
        fetchLastNameResponse.args.lastname
      }`
    )
  })
  .catch(err => console.log('Error in all: ', err))
```

It will log `Error in all: TypeError: Failed to fetch`.

## Summary

Before I end this blog post let me recap what I learned today: `Promise.race` which will returns a new
promise with first resolved value and `Promise.all` which waits for all promises to be either fullied
or rejected.

You can find those examples in this [codepen](https://codepen.io/krzysztofzuraw/pen/gvqJKR).

Thank you for reading and if you have any comments do not hesitate to write.

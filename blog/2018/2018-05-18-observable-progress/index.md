---
title: How to update progress of long request with redux-observable
date: "2018-05-19T09:12:03.284Z"
slug: "/blog/2018/update-progress-rxjs.html"
tags:
    - rxjs
    - redux
    - react
    - javascript
    - redux-observable
---

### Problem

I want to send a couple of requests an update a progress after each one is successful. In the end, I want to dispatch success action.

### Solution

```jsx
const epic = action$ =>
  action$.filter(action.fetchRequestStart).switchMap(action =>
    Observable.range(1, repeatTimes)
      .mergeMap(() =>
        Observable.from(fetchRequest).mergeMapTo(
          Observable.of(action.increaseProgress())
        )
      )
      .concat(Observable.of(action.fetchRequestSuccess()))
      .catch(action => Observable.of(action.fetchRequestError()))
  )
```

This is a simple epic implementing this logic. How does it work? After I filter out the action that is interesting for me from a stream, I map through it using `switchMap` so if user action dispatches the same action one more time during `Observable.range` the pending operation will be canceled.

Operator `range` works like intended - it will emit as many observables as I provide in `repeatTimes`. Right after that, I’m using `mergeMap` so I can add multiple observables - in my case, I only add one to dispatch action of `increasingProgress`. In the end, I use `concat` to emit action of success at the end of `range`. If anything goes wrong I catch errors in `catch`.

This is it for today! I was a quick blog post but you can email me with your feedback.

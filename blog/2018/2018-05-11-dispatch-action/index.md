---
title: How to dispatch multiple actions based on api call in redux-observable
date: "2018-05-11T10:12:03.284Z"
slug: "/blog/2018/dispatch-actions-on-api.html"
tags:
    - rxjs
    - redux
    - react
    - javascript
    - redux-observable
    - typescript
---

### Problem

In my work a have a task - when one of the actions in [redux-observable](https://redux-observable.js.org/) is completed I wanted to dispatch another set of actions. In other words, one action is triggering dispatching of another one.

### Solution

```jsx
const sampleEpic: Epic<RootAction, RootState> = (action$, store) =>
  action$.filter(isActionOf(myTriggerAction)).switchMap(action =>
    Observable.from(apiRequest(action.id))
      .switchMap(res =>
        Observable.concat(
          Observable.of(firstTriggeredAction),
          Observable.of(secondTriggeredAction)
        )
      )
      .catch(({ message, stack }) => Observable.of(errorAction))
  )
```

At the beginning of this snippet I filtering stream of actions in order to pick only those that I’m interested in. After that, I perform `apiRequest` and cast in to be [Observable](http://reactivex.io/documentation/observable.html). - standard way.

In the next `switchMap` I concat the 2 streams of observables - each one which it’s own action into one stream. Using this technique I can right now dispatch a bunch of actions based on one api call.

This is it for today! I was a quick blog post but you can email me with your feedback.

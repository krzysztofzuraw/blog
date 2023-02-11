---
title: switchMap in redux-observable
pubDate: 2018-06-02
slug: 2018/switchmap-in-redux-observable
---

## Introduction

Recently in my new work, I was working more and more with RxJs. Especially in with redux bindings to RxJs called [redux-observable](https://github.com/redux-observable/redux-observable). As I was reading epic code I noticed that in a lot of cases epics use `switchMap`. As I decided to learn more about so I can understand code that I’m reading or writing. This is a quick summary of what I learned.

## Example

```js
const exampleEpic (
  action$,
  store,
) =>
  action$
    .filter(isActionOf(actions.backendRequestInit))
    .switchMap(action =>
      Observable.from(backendService.makeRequest())
        .map(res => action.backendRequestSuccess(res))
        .catch(error =>
          Observable.of(action.backendRequestError(error)).do(() => {
            console.log(error);
          })
        )
    );
```

Let’s start from the top. What exactly is `action$`? It is a stream of your redux store actions. So all actions that you can imagine like: initializing your application, request initiators. They look like this:

```js
const backendRequestInit = {
  type: "BACKEND_REQUEST_INIT",
};
```

As my stream of actions is coming I filter out only needed action - in this case, - `backendRequestInit`. As I have my action I would like to do something - in this case make an asynchronous request to external API. I use here `switchMap` - why?

Switch map consists of two things: `switch` operator and `map`. Let’s start with the last one. `Map` works the same as normal map in javascript - creates a new array from existing one. As I’m working here on the streams I map my incoming stream to the new one - the one that is making a request.

`Switch` operator is here because I have here 2 steams. The first one from the filtered action, the second one from `map`. I flatten them through `switch` . This operator is dropping my `Observable.from(backendService.makeRequest())` when the new (the same) action of `actions.backendRequestInit` comes. What does it mean?

Imagine that user dispatches action `backendRequestInit` for example by clicking the button. My epics are in the middle of processing the request - as it may take a long time. But the user clicks the button again! In this case, using `switchMap` I can cancel previous observable and make the request again. This is useful to prevent for example memory leaks.

The last operator that I’m using in this epic in `catch` to catch errors emitted by observables in my `switchMap`.

### Summary

In this short blog post, I wanted to explain to you how `switchMap` operator works - please write to me if something wasn’t clear.

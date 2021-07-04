---
title: RxJS and auth token expiration timers
date: 2020-08-21
permalink: '/blog/2020/rxjs-auth-expiration-timers/index.html'
---

Recently in my work, I stumbled upon an interesting problem to solve. I needed to inform users that they have
a valid token only for the next 10 minutes and after that 10 minutes logout them.
You can see the user flow with more details on the illustration below.

{% img "2020-08-21-token-flow", "Expiration token flow", "Expiration token flow" %}

For this use case, I decided to use a [redux-observable](https://redux-observable.js.org/) - in this blog
post, I will write how I did it. I assume that you are familiar with the [RxJS](https://rxjs-dev.firebaseapp.com/).

Why the RxJS and not other redux middleware was used for async actions? To be honest it was my personal preference
and this library includes helper functions that are perfect for this use case.

Going back to the topic - let's start with the first event - user logs in.

## User logs in

I used [Auth0 lock](https://auth0.com/docs/libraries/lock) as an entry point to my application.
When the user enters login & password then is redirected back with [JWT token](https://jwt.io/).

## Read expiration time from token

JWT token has handy information about its expiration time.
I have used [jwt-decode](https://www.npmjs.com/package/jwt-decode) to decode a token and to extract expiration
time. If you are using TypeScript you need to type what is inside the token:

```tsx
import jwtDecode from 'jwt-decode';

const decodedToken = jwtDecode(authToken);
```

When it comes to date manipulation I have used [date-fns](https://date-fns.org/).
Firstly, I converted `exp` which is a UNIX timestamp to date and then
[sub](https://date-fns.org/v2.15.0/docs/sub) function help me to get date 10 minutes before `expirationDate`.

```tsx
import { fromUnixTime, sub } from 'date-fns';

const expirationDate = fromUnixTime(decodedToken.exp);
const firstNotificationDate = sub(expirationDate, { minutes: 10 });
```

## Epics

Now it is time to set up two [redux-observable](https://redux-observable.js.org/) epics.

The first epic has one job: to dispatch notification action 10 minutes before `expirationDate`.

```tsx
import { isActionOf } from 'typesafe-actions';
import { filter, delay, mergeMap, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs';

const setLogoutNotificationEpic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(setupAuthorization)),
    mergeMap(
      () =>
        of(showLogoutNotification())
          .pipe(delay(firstNotificationDate))
          .pipe(takeUntil(action$.pipe(filter(isActionOf(logoutUser))))) // unsubscribe when user logs out
    )
  );
```

RxJS has a handy helper for delaying action emission (in my case `showLogoutNotification`) called
[delay](https://www.learnrxjs.io/learn-rxjs/operators/utility/delay). What is neat about it? It can
take both the number of milliseconds and the date to delay stream of actions.
It has one bug though but more about it later.

I had the first epic in place so I can create the second one. This epic main task is
to logout user (dispatch action to logout user to be precise) on the expiration date.

```tsx
const setLogoutEpic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(setupAuthorization)),
    mergeMap(() =>
      of(logoutUser())
        .pipe(delay(tokenExpirationDate))
        .pipe(
          takeUntil(action$.pipe(filter(isActionOf(authActions.logoutUser)))) // unsubscribe when user logs out
        )
    )
  );
```

As you can see only actions and data passed to `delay` is different from the previous example.

You may ask why do I need to have those delays inside two different epics. It is because of the
[bug](https://github.com/ReactiveX/rxjs/issues/5232) in RxJS. Long story short - when you have two
delays inside the same epic they will not work. I took this opportunity and I made my code more
readable (at least I think I did).

## Summary

I wrote a blog post on how to use the RxJS [delay](https://www.learnrxjs.io/learn-rxjs/operators/utility/delay)
operator to dispatch two actions:

- 10 minutes before JWT token expires,
- when JWT token expires.

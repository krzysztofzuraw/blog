---
title: Dependency injection in  redux-observable
date: 2018-06-15
permalink: "/blog/2018/dependency-injection-redux-observable/index.html"
---

Imagine that you have following situation: your calls to external api are using helper modules where all request logic lies. For instance, you have
`backendService`:

```js
export const makeRequest = async () => return fetch.get('http://www.some_api.com');
```

In your epic you use this as follows:

```js
import * as backendService from "./backendService";

const fetchBackendServiceEpic = (action$, store) =>
  action$
    .filter(isActionOf(YOUR_TRIGGER_ACTION))
    .switchMap((action) => Observable.from(backendService.makeRequest()))
    .mapTo(YOUR_SUCCESS_ACTION)
    .catch((err) => Observable.of(YOUR_ERROR_ACTION));
```

Everything seems fine but to test this epic you have to mock whole API request to `http://www.some_api.com` using for instance [nock](https://www.npmjs.com/package/nock) . Your test starts to get a little bit heavy to write:

```js
describe("fetchBackendServiceEpic", () => {
  it.should("fetch service", () => {
    const mockStore = configureMockStore();
    nock(`http://www.some_api.com`).get().reply(200, {});
    return rootEpic(ActionsObservable.from(YOUR_TRIGGER_ACTION), mockStore)
      .toArray()
      .toPromise()
      .then((actions) => {
        expect(actions).toEqual([YOUR_TRIGGER_ACTION, YOUR_SUCCESS_ACTION]);
      });
  });
});
```

Can you do better?
Yes, using dependency injection. Your epic is depended on `backendService`. How can you inject it to your epic? The actual way of doing this is in the documentation : [Injecting Dependencies Into Epics · redux-observable](https://redux-observable.js.org/docs/recipes/InjectingDependenciesIntoEpics.html). Thanks to that you have your epic with dependency injected:

```js
const fetchBackendServiceEpic = (action$, store, { makeRequest }) =>
  action$
    .filter(isActionOf(YOUR_TRIGGER_ACTION))
    .switchMap((action) => Observable.from(backendService.makeRequest()))
    .mapTo(YOUR_SUCCESS_ACTION)
    .catch((err) => Observable.of(YOUR_ERROR_ACTION));
```

To test it you need:

```js
describe("fetchBackendServiceEpic", () => {
  it.should("fetch service", () => {
    const dependencies = { makeRequest: jest.fn().mockReturnValue([{}]) };

    fetchBackendServiceEpic(YOUR_TRIGGER_ACTION, (store = null), dependencies)
      .toArray()
      .subscribe((actions) => {
        expect(actions).toEqual([YOUR_TRIGGER_ACTIONS, YOUR_SUCCESS_ACTION]);
      });
  });
});
```

As you see here there is injecting dependency with your desired return value - you are testing logic of your epics and if proper actions are dispatched of your `TRIGGER_ACTION`.

### Summary

As you can see dependency injection in epics can be a powerful way to ease your testing of epics.

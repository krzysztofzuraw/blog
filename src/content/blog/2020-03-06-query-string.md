---
title: Query string library have stringifyUrl
pubDate: 2020-03-06
slug: 2020/query-string-library-have-stringifyurl
---

I've been using [query-string](https://github.com/sindresorhus/query-string) library to create my
query string for a long time. Normally I've used it as follows:

```js
import * as qs from "query-string";

const API_URL = "/users?" + qs.stringfy({ user: "1" });
// API_URL will be /users?user=1
```

Everything was fine until my parameter was null or undefined. When such case occurs my `API_URL`
looked something like `/users?`. It wasn't a problem for the endpoint - the request was hitting backend
yet I've some feeling that it can be done better. Today when I was integrating `query-string` into
a new project I found out about new function: `stringifyUrl`. Let's see it in action:

```js
import * as qs from "query-string";

const API_URL = qs.stringifyUrl(
  {
    url: "/users",
    query: {
      user: 1,
    },
  },
  { skipNull: true },
);
// API_URL will be /users?user=1
// and in case when user id is null
// /users
```

Perfect 🎉. Now I'm happy and I've learned new stuff - so if you happen to use [query-string](https://github.com/sindresorhus/query-string) consider using `stringifyUrl`.

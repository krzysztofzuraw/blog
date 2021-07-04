---
title: How design of your API can affect others
date: 2018-03-18
permalink: '/blog/2018/design-your-api/index.html'
---

**Recently I was working with a library called [redux-observable](https://redux-observable.js.org/).
After using it to write my new epic I opened my devtools to see following warning:**

{% img "2018-03-18-error", "Error", "Error" %}

I started researching what is happening here and I found this [changelog](https://github.com/redux-observable/redux-observable/blob/master/CHANGELOG.md#features-1). One fragment
took my attention:

> The ability to call store.dispatch() inside your Epics was originally provided as an escape hatch, to be used rarely, if ever. Unfortunately in practice we've seen a large number of people using it extensively; there has even been popular tutorials teaching it as how you use redux-observable

This is not a rant for developers of this wonderful library but rather note to me.

You have to think what you expose to the user in your API.
In this case, your user is your fellow developer. It doesn't matter if this is an open source library
or internal project. The same rules apply.

If you don't think about how your functions can be used - they will be misused.

Let say you expose some object to the developer and this object can be used only in certain cases.
It may work for the first time or the second - when you are reviewing code and found out miss-use.
But what happens when you forgot?

To sum it up: think about how your API will be used by others.

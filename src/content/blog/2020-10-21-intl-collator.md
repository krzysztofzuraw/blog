---
title: Intl Collator in JavaScript
pubDate: 2020-10-21
slug: 2020/intl-collator-in-javascript
---

Recently I needed to sort an array of objects from A to Z. Usually for such task I'm using the
following piece of code:

```tsx
const cities = [{ name: "Wrocław" }, { name: "Kraków" }, { name: "Łódź" }];

cities.sort((city1, city2) => (city1.name > city2.name ? 1 : -1));
```

Yet I had a problem with this code - the last city `Łódź` was not in the right place. The proper order
should be:

```tsx
[{ name: "Kraków" }, { name: "Łódź" }, { name: "Wrocław" }];
```

But code from previous example returned:

```tsx
[{ name: "Kraków" }, { name: "Wrocław" }, { name: "Łódź" }];
```

Why is that? Because `Łódź` is not starting from Unicode character - it is a [utf-8](https://en.wikipedia.org/wiki/UTF-8) one.

How then can I sort an array with `utf-8` characters? In turns out that all major browsers have support
for [localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare).

What it is? I like to think about this method as a way of sorting with `utf-8` support. `localeCompare`
allows me to compare two strings with internationalization support. My sorting example now can be changed to:

```tsx
const cities = [{ name: "Wrocław" }, { name: "Kraków" }, { name: "Łódź" }];

cities.sort((city1, city2) => city1.name.localeCompare(city2.name));
// [{name: 'Kraków'},{name: 'Łódź'},{name: 'Wrocław'}];
```

There is a lot of configuration options to `localeCompate` - if you want to know more I recommend
visiting [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare).

## Summary

In this blog post, I wrote on how to use [localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
to sort strings that are `utf-8`.

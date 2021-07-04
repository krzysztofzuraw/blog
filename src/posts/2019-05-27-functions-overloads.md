---
title: TypeScript function overloads
date: 2019-05-27
permalink: '/blog/2019/typescript-function-overloads/index.html'
---

**NOTE: This is cross-post from** [my newsletter](https://krzysztofzuraw.com/newsletter). **I publish each email after it’s sent.** [Subscribe](https://buttondown.email/krzysztof_zuraw) **to get more content like this earlier right in your inbox! 📧.**

**Hello** 👋🏻
Today I want to write a little bit about functions overloads in TypeScript. I will explain what is function overload and how to do it. In the next section, I will cover why you may want to overload your functions and what is a proper way of doing it.

During this article, I assume that you have at least basic knowledge of TypeScript.

## What

Function overloads is a way of telling TypeScript that this function may take different arguments.
Let’s jump into an example:

```ts
interface Data {
  postalCodes: string[];
  country: string;
}

const data: Data = {
  postalCodes: ['123', '422'],
  country: 'PL',
};
```

This is a bit contrived example but it illustrates the point. I have an object `data` which fulfills interface `Data`. This object has two keys `postalCodes` & `country` which are `string[]` and `string` type respectively.

Below I have `getDataByKey` which is a helper to get either `postalCodes` or `country`.

```ts
function getDataByKey(data: Data, key: 'postalCodes' | 'country') {
  return data[key];
}

const postalCodesRetrieved: string[] = getDataByKey(data, 'postalCodes');
```

Everything looks nice so far but at the last line I want my `postalCodesRetrieved` to be array of string. Yet compiler will return and error:

```ts
Type 'string | string[]' is not assignable to type 'string[]'.
  Type 'string' is not assignable to type 'string[]'.
```

You can find a playground with this problem under this [link](http://bit.ly/functionProblem 'Playground').

## Why & How

How to fix it? You can use function overloading:

```ts
function getDataByKey(data: Data, key: 'postalCodes'): string[];
function getDataByKey(data: Data, key: 'country'): string;
function getDataByKey(data: Data, key: 'postalCodes' | 'country') {
  return data[key];
}
```

I write two overloads for `getDataByKey`: one is taking `country` as a `key` and returns `string`. Another one takes `postalCodes` and returns `string[]`. Thanks to that I can use `getDataByKey` with both keys:

```ts
const postalCodesRetrieved: string[] = getDataByKey(data, 'postalCodes');
const countryCodesRetrieved: string = getDataByKey(data, 'country');
```

You can even see that this function is overloaded by hovering:

{% img "2019-05-27-hover", "Overloaded function on hover", "Overloaded function on hover" %}

[Link](http://bit.ly/functionOverload 'TypeScript playground') to TypeScript playground with code from above.

### Function overloads in an arrow function

```ts
interface GetData {
  (data: Data, key: 'postalCodes'): string[];
  (data: Data, key: 'country'): string;
}

const getData: GetData = (data, key) => {
  return data[key];
};

const postalCodesRetrieved: string[] = getData(data, 'postalCodes');
const counryRetrieved: string = getData(data, 'country');
```

This is working by `GetData` interface where overload is happening. Thanks to that I don’t need to type `data` & `key` arguments anymore. [Playground link](http://bit.ly/arrowOverload)

### Function overloads in class methods

```ts
class DataGetter {
  getData(data: Data, key: 'country'): string;
  getData(data: Data, key: 'postalCodes'): string[];
  getData(data: Data, key: 'postalCodes' | 'country') {
    return data[key];
  }
}

const dataGetter = new DataGetter();

const postalCodesRetrieved: string[] = dataGetter.getData(data, 'postalCodes');
const counryRetrieved: string = dataGetter.getData(data, 'country');
```

It looks almost the same as for normal function but here `getData` method is overloaded. [Playground link](http://bit.ly/methodOverload)

## Summary & TL;DR

In this post, I presented a way of telling TypeScript that the same function can be called with different parameters or returns different results. This is a function overloading. You can overload class methods too. In the simplest example, you need to write a declaration of override function at the top of a function definition.

Do you use it? If so where? Write to me at krzysztof.zuraw(at)fastmail.com.

You can find all playgrounds links here:

- [problem](http://bit.ly/functionProblem)
- [function overload](http://bit.ly/functionOverload)
- [arrow function overload](http://bit.ly/arrowOverload)
- [class method overload](http://bit.ly/methodOverload)

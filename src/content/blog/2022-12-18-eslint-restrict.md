---
title: Eslint rule to restrict imports
pubDate: 2022-12-18T14:03:52Z
slug: 2022/eslint-rule-to-restrict-imports
---

I recently learned that there is a way to restrict imports of certain libraries in [Eslint](https://eslint.org). This is useful for example when you want to restrict the use of a certain library. For example, you might want to restrict the use of [lodash.js](https://lodash.com/) in your codebase. You can do this by adding the following rule to your Eslint config:

```js
rules: {
  'no-restricted-imports': [
    'error',
    {
      paths: [
        {
          name: 'lodash',
          message: 'Please use the native implementation instead.',
        },
      ],
    },
  ],
},
```

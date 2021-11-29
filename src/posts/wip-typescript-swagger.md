---
title: Generating TypeScript types from Swagger schema
date: Last Modified
permalink: 'blog/2021/typescript-types-swagger/index.html'
---

All our frontend codebase is using TypeScript which is all great but we always struggled with one aspect of writing types - **typing backend responses and requests**. 

At the begining we were using JavaScript classes with DTO approach. It turns out that it requires a lot of typing to get even basic request/response typed.

Then we moved into direction of using TypeScript interfaces or types - still written by hand. It was relieved from ==rigit== classes but we still were writing a lot of code that then need to be in sync with backend. Frontend expect that this field will come and backend wasnt so sure about that - and we land with `cannot read property of undefined` in production.

Then I found one Syntax.fm episode where I heard about [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api). This handy library takes `swager.json` schema and generates TypeScript types out of them. It is packed with a few amazing additions like prettier support or generating axios client.

How we are using it?
* Commit or not commit types
* Generate client for axios or do not

```js
const { generateApi } = require('swagger-typescript-api');
const path = require('path');

generateApi({
  name: 'api.ts',
  output: path.resolve(process.cwd(), 'src', 'commons'),
  url: 'https://api-development.ingrid.com/v1/moirai/_/swagger.json',
  httpClientType: 'axios',
  generateUnionEnums: true,
  prettier: {
    printWidth: 100,
    trailingComma: 'es5',
    singleQuote: true,
    semi: true,
    arrowParens: 'avoid',
    tabWidth: 2,
    parser: 'typescript',
  },
});
```

---
* npx swagger generator
* node script
* proto in the future
* one source of truth
* what works fine
* what do not works fine
* axios client
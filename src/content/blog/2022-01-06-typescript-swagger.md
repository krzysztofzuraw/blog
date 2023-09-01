---
title: Generating TypeScript types from Swagger schema
pubDate: 2022-01-06
slug: 2022/generating-typescript-types-from-swagger-schema
---

All our frontend codebase is using TypeScript which is all great but we always struggled with one aspect of writing types - **typing backend responses and requests**.

At the beginning we were using JavaScript classes with DTO approach. It turns out that it requires a lot of typing to get even basic request/response typed.

Then we moved into direction of using TypeScript interfaces or types - still written by hand. It was relieved from rigid classes but we still were writing a lot of code that then need to be in sync with backend. Frontend expect that this field will come and backend wasn't so sure about that - and we land with <q>cannot read property of undefined</q> in production.

Then I found one Syntax.fm episode where I heard about [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api). This handy library takes swagger.json schema and generates TypeScript types out of them. It is packed with a few amazing additions like prettier support or generating axios client.

The first thing you need to answer is if you want to commit your types or not into repository. We decided by going with <q>committing</q> approach - generated file will be included in diffs for PRs. This approach is much easier to get started than not committing and in the future we can always change it. Not committing means that we have to generate types every time CI is running types check.

The second thing is: do we want to generate `axios` client or not? We decided to generate it. We then change existing axios client setup with new generated client. Cons? We found out that is it hard to keep axios, swagger-typescript-api in sync so the types do not break. As of time of this writing we had to pin axios to 0.21.4 to avoid such break.

Code for generating types can be found below:

```js
const { generateApi } = require("swagger-typescript-api");
const path = require("path");

generateApi({
  name: "api.ts",
  output: path.resolve(process.cwd(), "src", "commons"),
  url: "https://api/_/swagger.json",
  httpClientType: "axios",
  generateUnionEnums: true,
  prettier: {
    printWidth: 100,
    trailingComma: "es5",
    singleQuote: true,
    semi: true,
    arrowParens: "avoid",
    tabWidth: 2,
    parser: "typescript",
  },
});
```

## Summary

What works fine with generating types from swagger schema?

- One source of truth - swagger JSON schema
- Strictly typed API out of the box on frontend

What can be improved?

- Communication - this is typical one. When there is a bug - which person should be responsible for updating a types in proto and swagger? This is something we still figuring out

What else you can use?

- Generating types from [protobuff](https://developers.google.com/protocol-buffers/)

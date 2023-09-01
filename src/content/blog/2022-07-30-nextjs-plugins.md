---
title: Migrating Next.js plugins from next-compose-plugins
pubDate: 2022-07-30T15:25:03Z
slug: 2022/migrating-next.js-plugins-from-next-compose-plugins
---

I recently updated Next.js to version 12.2.3 and I found out that [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins) do not work anymore. After peek at GitHub [issue](https://github.com/hashicorp/next-mdx-enhanced/issues/18#issuecomment-859167393) and I was able to copy and paste working solution:

```js
/**
 * @type {import('next').NextConfig}
 */
module.exports = () => {
  const plugins = [withTM, withVanillaExtract, withSentryConfig];
  return plugins.reduce((acc, next) => next(acc), {
    i18n: {
      locales: ["en-US", "nl-BE", "pl-PL"],
      defaultLocale: "en-US",
    },
  });
};
```

It worked fine but I wanted to pass argument to `withSentryConfig` - i turns out that I need to pass it as another argument to `next` function in reduce:

```js
return plugins.reduce(
  (acc, next) => {
    if (next.name === "withSentryConfig") {
      return next(acc, { silent: true });
    }

    return next(acc);
  },
  {
    // the rest of next.js config
  },
);
```

## Changelog

1. Update the last snippet after feedback from [Miguel Leite
   ](https://dev.to/miguelacleite/comment/21g7l)

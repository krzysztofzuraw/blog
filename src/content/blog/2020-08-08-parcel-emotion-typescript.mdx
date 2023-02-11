---
title: How to setup emotion css prop to work with Parcel & TypeScript
pubDate: 2020-08-08
slug: 2020/how-to-setup-emotion-css-prop-to-work-with-parcel-and-typescript
---

In this blog post I will look into how to setup [Emotion](https://emotion.sh/docs/introduction) `css prop`
with [Parcel](https://parceljs.org/) & [TypeScript](https://www.typescriptlang.org/).
There are two ways those tools work with each other.
You can either use `/** @jsx jsx */` pragma on every file you want to
use `css prop` or you can tell babel to do it for you.
I'm a bit lazy so I prefer the second option. Below you will find a quick guide on how to do it.

1. Create the `.babelrc` file inside the root of your repository. Put the following contents inside:

```json
{
  "plugins": [
    ["transform-inline-environment-variables"],
    [
      "babel-plugin-jsx-pragmatic",
      { "export": "jsx", "module": "@emotion/core", "import": "___EmotionJSX" }
    ],
    [
      "@babel/plugin-transform-react-jsx",
      { "pragma": "___EmotionJSX", "pragmaFrag": "React.Fragment" }
    ],
    ["emotion"]
  ]
}
```

In essence you are telling babel to add [jsx-pragma](https://www.gatsbyjs.org/blog/2019-08-02-what-is-jsx-pragma/)
when you are using `css prop`. If you want to know more I recommend [this issue](https://github.com/emotion-js/emotion/issues/1132) on github.

2. Edit tsconfig with jsx & types

```json
{
  "compilerOptions": {
    // the rest of configuration
    "jsx": "preserve", // for babel to work
    "types": ["@emotion/core"] // you can now use css prop on e.g div and TypeScript won't shout at you
  }
}
```

3. Let parcel install needed deps. Run command for building your parcel project.
   Parcel is smart enough to install needed dependencies by yourself. If you happen to get an error:
   `Conflicting babel versions found in .babelrc. Make sure all of your plugins and presets depend on the same major version of babel.`
   I recommend to add `"@babel/core": "7.10.5"` as dev dependency inside package.json and run `npm install` again.

## Summary

In this blog post, I've looked into how to setup Emotion `css prop` with Parcel & TypeScript. You can find
an example repo on my [github](https://github.com/krzysztofzuraw/parcel-emotion-typescript).

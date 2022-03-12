---
title: How to split antd theme into smaller components
date: 2020-10-14
permalink: "/blog/2020/split-antd/index.html"
---

Recently I stumbled upon an interesting problem at work. I was using [ant-design](https://ant.design/)
and I wanted to customize default theme variables. To do that I've created a `theme.less`:

```less
@import "~antd/dist/antd.less";

@primary-color: #003dff;
@dark-color: #38b6ab;
@font-family: Inter;
```

Everything was fine until I looked into [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)
I saw that `theme.less` was taking a huge portion of the overall bundle size:

{% img "2020-10-14-bundle-analysis", "Bundle analysis", "Bundle analysis" %}

## What is the problem here?

It turns out that by `@import '~antd/dist/antd.less'` I accidentally imported whole antd styles.
Because of that `theme.less` is so big. How to fix it? After googling around I found out about 2 steps
that I could that to lower size of my bundle:

- customize antd theme via webpack
- tell transpiler (babel) to inject css when you are using antd components

## Customizing antd theme

How you can customize antd theme? According to [antd docs](https://ant.design/docs/react/customize-theme#Customize-in-webpack)
you can add `options` to webpack `less-loader`:

```js
// the rest of webpack config
module.exports = {
  module: {
    rules: [
      // the rest of loaders setup
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  // override antd default styles
                  "primary-color": "#003dff",
                  "dark-color": "#38b6ab",
                  "font-family": "Inter",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
};
```

## Setup babel to inject CSS

The second optimization I added was to extract only those styles that are used by antd components inside
my application via [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import). You can see
the recommended configuration of this plugin below:

```json
{
  // rest of .babelrc
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ]
  ]
}
```

### Summary & TL;DR

In this blog post, I wrote on how to override [antd](https://ant.design/) theme without importing
whole library styles and how to use only those styles that are actually used in your application.

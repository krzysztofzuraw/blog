# Blog

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Netlify Status](https://api.netlify.com/api/v1/badges/76679400-2108-484e-b2a4-dccd71984e48/deploy-status)](https://app.netlify.com/sites/flamboyant-stallman-9dcf8d/deploys)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=krzysztofzuraw/blog)](https://dependabot.com)

This repository contains code & blog post for my [personal page](https://krzysztofzuraw.com).

Source files are under `src`. Blog posts are inside `blog`. To build my personal site I've used
[gatsby.js](https://www.gatsbyjs.org/) with [TypeScript](https://www.typescriptlang.org/).

## How to run

Install dependencies:

```shell
npm run install
```

Run development server:

```shell
npm run dev
```

To generate graphQL schema make sure that your dev server is running and use:

```shell
npm run gen
```

To check types use:

```shell
npm run tsc
```

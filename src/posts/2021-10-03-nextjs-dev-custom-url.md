---
title: How to open custom URL with Next.js dev command
date: 2021-10-03T12:00
---

If you need to open custom url while running `next.js dev` you can use
[pre](https://docs.npmjs.com/cli/v7/using-npm/scripts#pre--post-scripts) package.json script to do so:

```json
{
  "scripts": {
    "predev": "open http://localhost:3000/CUSTOM_URL",
    "dev": "next dev"
  }
}
```

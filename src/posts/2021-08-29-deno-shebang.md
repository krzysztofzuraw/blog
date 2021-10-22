---
title: How to add shebang to deno script
date: 2021-08-29
permalink: '/blog/2021/deno-shebang/index.html'
---

If you need to add [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) to [deno](https://deno.land/) script add this line on the top of the script:

```shell
#!/usr/bin/env -S deno run --allow-read --allow-write
```

Now if you need to exectue script type: `./script.ts` and you
are done 🎉.

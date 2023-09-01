---
title: How to add shebang to deno script
pubDate: 2021-08-29
slug: 2021/how-to-add-shebang-to-deno-script
---

If you need to add [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) to [deno](https://deno.land/) script add this line on the top of the script:

```shell
#!/usr/bin/env -S deno run --allow-read --allow-write
```

Now if you need to exectue script type: `./script.ts` and you
are done 🎉.

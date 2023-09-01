---
title: Ramda clamp
pubDate: 2020-06-04
slug: 2020/ramda-clamp
---

Today I learned that [Ramda](https://ramdajs.com/) has a `clamp` function.
What is [clamp](https://ramdajs.com/docs/#clamp)? It allows you to set value between `min` & `max`.

Example:

```ts
import { clamp } from "ramda";

setCoordinates(clamp(-90, 90, event.target.value));
```

Value will be set to at max 90 or at min -90 or everything in between.

You can do it without `ramda` via:

```ts
const coordinateValue = Math.min(Math.max(parseInt(number), -90), 90);
setCoordinates(coordinateValue);
```

Taken from [How can I use JavaScript to limit a number between a min/max value? - Stack Overflow](https://stackoverflow.com/questions/5842747/how-can-i-use-javascript-to-limit-a-number-between-a-min-max-value).

---
title: Custom font on GitHub
date: 2022-08-07T14:04:03Z
---

To set your favourite font to be on GitHub you need:

1. [Refined GitHub](https://github.com/refined-github/refined-github) extension
2. Go to options of this extension. For Chrome: click on 3 dots on installed extension on `Extensions` list and select `Options`
3. Paste following CSS into `Custom CSS` text-area

```css
pre,
code,
.blob-code,
.blob-code-marker,
.input-monospace,
.markdown-body code {
  font-family: MonoLisa;
}
```

4. You can change fonts/colours for other parts of GitHub using `Custom CSS` option

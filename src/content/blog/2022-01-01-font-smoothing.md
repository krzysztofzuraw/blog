---
title: Font smoothing after Big Sur
pubDate: 2022-01-01T08:00:34Z
slug: 2022/font-smoothing-after-big-sur
---

1. Disable font smoothing (default value is 2) in terminal

```shell
defaults -currentHost write -g AppleFontSmoothing -int 0
```

2. (Optionally) Edit VS Code settings and add

```json
"workbench.fontAliasing": "antialiased"
```

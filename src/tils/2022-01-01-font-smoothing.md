---
title: Font smoothing after Big Sur
date: 2022-01-01T08:00:34Z
---

1. Disable font smoothing (default value is 2) in terminal

```shell
defaults -currentHost write -g AppleFontSmoothing -int 0
```

2. (Optionally) Edit VS Code settings and add

```json
"workbench.fontAliasing": "antialiased"
```

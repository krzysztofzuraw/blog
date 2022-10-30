---
title: Enable spell check on mac
date: 2022-01-01T08:10:34Z
---

If you happen to install Grammarly Desktop and spell checking is not working - use this command in terminal:

```shell
defaults write -g NSAllowContinuousSpellChecking -bool true
```

After that restart affected apps.

[Source](https://talk.macpowerusers.com/t/grammarly-now-supports-native-mac-apps/26304/38)

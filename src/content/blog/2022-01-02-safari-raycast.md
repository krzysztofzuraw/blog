---
title: Raycast script - copy foremost Safari window as markdown link
pubDate: 2022-01-02T08:00:34Z
slug: 2022/raycast-script-copy-foremost-safari-window-as-markdown-link
---

I wanted a solution to get foremost Safari window copied as markdown link. At first I tried to use build in shortcuts - without luck. I could get URL but getting name was not possible (if there is please write to me about it). Then I looked on the internet find [URL Linker for Safari on the App Store](https://apps.apple.com/th/app/markdown-linker-for-safari/id1289119450?mt=12). It works fine - if you are willing to use mouse. At least I remember that you can use [Raycast](https://www.raycast.com/) script commands in applescript to accomplish such task. You can find code below:

```applescript

#!/usr/bin/osascript

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Copy Current Safari URL as markdown
# @raycast.mode silent
# @raycast.packageName Safari
#
# Optional parameters:
# @raycast.icon ⏺️
#
# Documentation:
# @raycast.description This script copies to clipboard URL from foremost Safari window in markdown format
# @raycast.author Krzysztof Żuraw
# @raycast.authorURL https://github.com/krzysztofzuraw

tell application "Safari" to set |Title & URL| to {name, URL} of current tab of front window

set link to ("[" & first item of |Title & URL| & "]("  & second item of |Title & URL| & ")" )
set the clipboard to link

log "Copied"
```

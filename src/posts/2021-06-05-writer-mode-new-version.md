---
title: New version of writer mode
date: 2021-06-05
permalink: '/blog/2021/writer-mode-new-version/index.html'
---

I recently updated my VS Code extension [writer-mode](https://marketplace.visualstudio.com/items?itemName=noaal.writer-mode#:~:text=Distraction%20free%20plain%20text%20editing,p%20and%20Writer%20mode%3A%20Deactivate%20) to version 0.3.0. Before I start with what was changed - quick into what is writer mode? It is Visual Studio Code extension that allows you to temporary override editor settings and execute commands on activation & deactivation of extension. I use it for transforming VS Code into writing tool.

Going back to what is new in version 0.3.0? I totally rewrite writer mode. Why? I found out that having set of hardcoded settings is not scalable - previous version for example bumps line height to 21. What if I wanted to have line height of 24? I need to either update value in extension or figure out different way of handing it.

I also stumbled upon [Building an ultimate writing machine from Sublime Text
](https://tonsky.me/blog/sublime-writer/) blog post and I really like the idea of having some kind of user/editor profiles that overrides certain settings.

I added 3 new settings:

- `writerMode.overrideSettings` is a object where you can put key & value pairs of settings that will be set when extension is activated e.g. if you want to change font size use `"editor.fontSize": "24"`
- `writerMode.executeOnActivate` is an array of commands (in string format) that will be executed when extension is activated. For example I want to toggle [VSCode dimmer](https://marketplace.visualstudio.com/items?itemName=hoovercj.vscode-dimmer&ssr=false#overview) so I put `dimmer.ToggleDimmer` there.
- `‌writerMode.executeOnDeactivate` is similar setting but commands there are executed when extension is deactivated.

You can find new version on [VSCode marketplace](https://marketplace.visualstudio.com/items?itemName=noaal.writer-mode#:~:text=Distraction%20free%20plain%20text%20editing,p%20and%20Writer%20mode%3A%20Deactivate%20).

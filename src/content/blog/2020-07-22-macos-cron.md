---
title: Cron under MacOS
pubDate: 2020-07-22
slug: 2020/cron-under-macos
---

I'm using plain text to store my information. This plain text is inside a git repo. To back it up I
need to commit changes & push them to the remote. I was doing that manually. Yet this is not effective.
I decided to use cron for that. Every 30min I want to execute a script that backs up my wiki.
How to do that under mac?

## Cron under MacOS

You cannot use cron. Instead Apple encourage to use [launchctl](https://ss64.com/osx/launchctl.html).
How to set up launchctl? At first you need to create plist file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.krzysztofzuraw.wikibackup</string>

  <key>ProgramArguments</key>
  <array>
    <string>/Users/kzuraw/wiki/backup.sh</string>  <!-- script location -->
  </array>

  <key>Nice</key>
  <integer>1</integer>

  <key>StartInterval</key>
  <integer>1800</integer> <!-- 30min -->

  <key>RunAtLoad</key>
  <true/>

  <key>StandardErrorPath</key>
  <string>/tmp/wikibackup.err</string>

  <key>StandardOutPath</key>
  <string>/tmp/wikibackup.out</string>
</dict>
</plist>
```

Maybe you wonder what is `nice` key? After a bit of searching, I found out that it is used for scheduling priority. You can read more about
it on [man](https://www.manpagez.com/man/3/nice/) page of `nice`.

Going back to configuration. For launchctl to pick up your configuration plist file has to be placed
under `~/Library/LaunchAgents`. I prefer to use already existing plist naming convention: `com.YOURNAME.CONFIGURATION_NAME.plist`
I named my plist as `com.krzysztofzuraw.wikibackup.plist`. If you have this setup execute `launchctl load com.krzysztofzuraw.wikibackup.plist`.
Similarly if you need to unload it you can use `launchctl unload com.krzysztofzuraw.wikibackup.plist`.
To see which launchctl scripts are running try `launchctl list`.

My `lanuchctl` script is running but how does `backup.sh` looks like?

```shell
#!/bin/zsh
cd ~/wiki # script still needs to enter folder even if backup script is inside the wiki
git add .
git commit -a -m "updated on `date +'%Y%m%d%H%M'`"
git push origin master
```

## Summary

If you see to set up cron jobs under MacOS - use [launchctl](https://ss64.com/osx/launchctl.html). You
can read more at [Mac crontab: Creating MacOS startup jobs with crontab, er, launchd](https://alvinalexander.com/mac-os-x/mac-osx-startup-crontab-launchd-jobs/).
Original idea from [Using VimWiki](https://thelinell.com/using-vimwiki/).

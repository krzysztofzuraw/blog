#!/usr/bin/env bash

echo "---
spell-checker: disable
title: WIP
date: $(date -u +%Y-%m-%dT%H:%M:%SZ)
---" > src/posts/$(date +%F)-wip.md

code src/posts/$(date +%F)-wip.md

echo 'Blog post entry created'

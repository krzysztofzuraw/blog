#!/usr/bin/env bash

echo "---
spell-checker: disable
title: WIP
author:
translator:
lang:
publisher:
year:
date: $(date -u +%Y-%m-%dT%H:%M:%SZ)
---" > src/reading/$(date +%F)-wip.md

code src/reading/$(date +%F)-wip.md

echo 'Reading entry created'

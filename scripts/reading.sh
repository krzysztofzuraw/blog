#!/usr/bin/env bash

echo "---
spell-checker: disable
title: WIP
date: $(date -u +%Y-%m-%dT%H:%M:%SZ)
author:
translator:
rating:
lang:
publisher:
year:
---" > src/reading/$(date +%F)-wip.md

code src/reading/$(date +%F)-wip.md


echo 'Reading entry created'

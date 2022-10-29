#!/usr/bin/env bash

echo "---
spell-checker: disable
title: WIP
date: $(date -u +%Y-%m-%dT%H:%M:%SZ)
---" > src/writing/$(date +%F)-wip.md

code src/writing/$(date +%F)-wip.md

echo 'Writing entry created'

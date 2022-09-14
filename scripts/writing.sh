#!/usr/bin/env bash

echo "---
title: WIP
date: $(date -u +%Y-%m-%dT%H:%M:%SZ)
---" > src/writing/$(date +%F)-wip.md

code src/writing/$(date +%F)-wip.md

echo 'Writing entry created'

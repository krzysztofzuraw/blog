#!/usr/bin/env bash	

echo "---	
title: WIP	
description:	
pubDate: $(date -u +%Y-%m-%dT%H:%M:%SZ)	
slug: 2024/wip	
---	
" > src/content/blog/$(date +%F)-wip.md

code src/content/blog/$(date +%F)-wip.md

echo 'Blog post created'

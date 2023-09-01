#!/usr/bin/env bash	

echo "---	
spell-checker: disable	
title: WIP	
description:	
pubDate: $(date -u +%Y-%m-%dT%H:%M:%SZ)	
slug: 2023/wip	
---	
" > src/content/blog/$(date +%F)-wip.md

code src/content/blog/$(date +%F)-wip.md

echo 'Blog post created'

---
title: Multiple stow directories
date: '2019-04-15T09:12:03.284Z'
slug: '/blog/2019/multiple-stow-directories.html'
tags:
  - stow
  - dotfiles
---

# Hi again 👋

Today I want to write about the problem that I recently had that I solved after a few
hours of searching google. It may help others so I write a post about it.

## Problem

For managing my [dotfiles](https://github.com/krzysztofzuraw/dotfiles) I'm using
[stow](https://www.gnu.org/software/stow/). It works great for my use case - symlinking
folders from my dotfiles to actual place that they are needed. Yet recently I decided
to split my dotfiles into two: public and private.

The problem was that after a split I cannot easily use `stow fish` from my private dotfiles because
I got an error that this directory is already used by stow.

## Stow folding problem

It turns out that stow is doing something called `folding`. It means that it is
symlinking whole folder instead of individual files. So `stow fish` will create
folder symlink and that is why I cannot symlink other files to the same location.

## Solution

Yet stow has an interesting flag `--no-folding` which called while stowing folder:
`stow fish --no-folding`. Because of this stow won't symlink folders but files
inside folders. Thanks to that I can have two dotfiles with the same fish folder
but with different files.

## Summary & TL;DR

If you want to symlink the same two directories from different stow folders you can
use `--no-folding` flag.

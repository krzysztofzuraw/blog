---
title: Photo Grid Codepen challenge
date: 2020-01-26
---

Recently I’ve got an email with invitation for weekly codepen [challenge](https://codepen.io/challenges/2020/january/3). This time I’ve decided to give it a try as it seems like nice thing to try my CSS skills.

Task was to implement grid with photos. For this I’ve used this [guide](https://css-tricks.com/adaptive-photo-layout-with-flexbox/).

## What I learned

`object-fit` - it’s about resizing of the `img` element to fill out container that such tag is. It also maintains aspect ration - so in case of image being larger it will crop image to content.

`flex-grow` - it is used with flexbox to tell how much of remaining space the element can take. In most cases it has numerical values.

`filter: grayscale(80%)` - I’ve used it on hover to apply grayscale on images.

You can check my codepen [here](https://codepen.io/krzysztofzuraw/pen/povqRXK)

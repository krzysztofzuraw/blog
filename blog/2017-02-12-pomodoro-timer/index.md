---
title: Pomodoro timer - beginning
date: '2017-02-12T10:00Z'
slug: '/blog/2017/pomodoro-timer-beginning.html'
tags: 
    - javascript
    - pomodoro technique
readNext: '/blog/2017/pomodoro-timer-counting.html'
---

**From this post I will try to make new a blog post series - documenting
my projects. In previous projects like this, I had every time a fixed
number of blog posts I wanted to write about a specific project - from 2
to 4. Right now, I want to try writing as many blog posts as it will be
necessary to end a project - without any specific number in mind. Let's
get started!**

What pomodoro-timer project will be about
=========================================

I stumbled upon [pomodoro
technique](http://cirillocompany.de/pages/pomodoro-technique) during my
student times when I wanted to be more productive. It works great and I
tried many different tools starting from web apps and ending on google
play store. Recently I reread the pomodoro technique manifesto and I
found out that I have missed one important aspect - tracking if 25min of
work was without distraction. To accomplish that I started noting down
which pomodoro was without distractions and which wasn't. I started
noticing that I sometimes forgot to write down if pomodoro was good or
not.

Then I had an idea - what if I write my own timer and at the end of
25min application will ask me: 'How productive last 25min was?'. Based
on that I can start tracking my productivity throughout the day.

Moreover, I wanted to learn javascript so I decided to create my own
pomodoro timer as a web page.

A few words about tools
=======================

In today javascript there are infinite number of tools, frameworks - by
the way I recommend to read this
[piece](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.oifaoe6ph).

I wanted to start from the basics without any framework to help me. I
believe that frameworks come and go but understanding how language works
stays. So I pick the newest javascript implementation -[ECMAScript
6](http://es6-features.org/).

Then I started searching for web application template and I found one -
[Web Started Kit](https://developers.google.com/web/tools/starter-kit/).
I've opened it and looked inside the code. I looked one more time. So
many tools! Sass, gulp, babel and other. I closed the editor. I removed
this code and I started from scratch. I know it can help me a lot but I
want to start from the basics. As I'm doing [javascript
course](https://javascript30.com) by Wes Bos I decided to use some tools
that he is using. I really like
[browser-sync](https://www.npmjs.com/package/browser-sync). It
automatically reloads web pages when I change html, css or js files. To
start browser-sync I have this one line in my `package.json`:

```json
{
  "scripts": {
    "start": "browser-sync start --server --files '*.css, *.html, *.js'"
  }
}
```

Then I just write `npm start`.

When I learn a new language I always look for the best practices. In
javascript word there is a couple of them but I choose [Airbnb
JavaScript Style Guide](https://github.com/airbnb/javascript). Hot tool
for linting js files right now is [eslint](http://eslint.org/). To use
eslint with this style guide I installed `eslint-config-airbnb`. Thanks
to that in my `.eslintrc` I just wrote:

```json
{
  "extends": "airbnb",
}
```

Right now I'm ready to write some javascript code! Stay tuned for the
next blog post. If you have anything to add please comment below.

Repo with this code is available on
[github](https://github.com/krzysztofzuraw/pomodoro-timer).

Special thanks to Kasia for being an editor for this post. Thank you.

---
title: On moving blog to Gatsby.js
date: "2017-11-04T09:12:03.284Z"
slug: "/blog/2017/moving-blog-to-gatsby.html"
tags:
    - blog
    - javascript
    - react
---

**Sometimes it is time to change and I decided to move from [Pelican](https://blog.getpelican.com/)
to [Gatsby.js](https://www.gatsbyjs.org/).**

## Why

I got a problem with Pelican. If I wanted to add custom behavior to my blog (like linking articles to
each other) I cannot do it in the fast and easy way. The same was with custom styling - Pelican generates
html with always the same styling - it means that I have to write a lot of CSS to have my webpage done
right.

What I liked in Gatsby is that I can connect any data source to GraphQl and have my blog running! Also,
I see some educational aspect - I can learn more about JavaScript ecosystem.

## Moving blog

Based on that I made the decision to migrate my blog to gatsby. But I got a problem - my blog posts are
written in `rst` format. To convert them from rst to markdown I used pandoc:

```python
import argparse
import os
import pypandoc
import markdown


def convert_rst_to_md(input_path, output_path):
    rst_files = os.listdir(input_path)
    for rst_file in rst_files:
        output = pypandoc.convert_file(
            os.path.join(input_path, rst_file), 'md', extra_args=['--standalone']
        )
        md = markdown.Markdown(extensions=['markdown.extensions.meta'])
        md.convert(output)
        date_in_str = md.Meta.get('date', 'Not valid date')[0][1:-7]
        file_name = rst_file[:-4].replace('_', '-')
        dir_name = os.path.join(output_path, f'{date_in_str}-{file_name}')
        os.mkdir(dir_name)
        with open(os.path.join(output_path, dir_name, 'index.md'), 'w') as markdown_file:
            markdown_file.write(output)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--input', help='input folder')
    parser.add_argument('--output', help='output folder')
    args = parser.parse_args()
    convert_rst_to_md(args.input, args.output)
```

This script takes every rst file from given `--input` folder then generates markdown with yaml syntax at the
top and put this new file as a `index.md` inside `{timestamp}-{title}` folder. You need to install following
packages to get this script working:

```text
Markdown==2.6.9
pypandoc==1.4
```

I thought - ok this migration shouldn't take a long time. What I learned is that wasn't the case. I have my
specific for pelican rst syntax which I had to migrate by hand. It took me about 2 weeks to do this
kind of migration. Also, I got legacy rst syntax flying around.

## What is new

I decided to remove header covers from my webpage. I removed Disqus comments - based on this
[article](http://chrislema.com/killed-disqus-commenting/). What I did instead - if you have any comment
you can write to me using either [Keybase](https://keybase.io/encrypt#krzysztofzuraw) or new email address - `krzysztofzuraw(at)fastmail.com`.

## Summary

I'm back writing! I moved stuff around and I learned that migration can take a long time.

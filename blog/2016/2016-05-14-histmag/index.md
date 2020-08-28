---
title: My first personal project
date: '2016-05-14T10:20Z'
slug: '/blog/2016/my-first-personal-project'
tags:
  - python
  - histmag
---

**Hi, today I wanted to share my thoughts about project that I made
called** [histmag to
kindle](https://github.com/krzysztofzuraw/histmag_to_kindle).

## Why?

I really enjoy reading historical articles over the internet. Very good
source of such writings in polish is [histmag](http://histmag.org/). One
problem is that articles are divided into sub-pages which don't work
well while I save them to read later. Then when I'm onto reading I send
my read it later articles to kindle. To bypass such inconvenience I
started adding every subpage manually to my queue in pocket. As a step
into programming path I decided to code my own crawler to crawl through
the website and then send the neatly prepared mobi file to my kindle.

## What I learned?

After I made my mind I have to choose between many crawling tools
available in python like: [scrapy](http://scrapy.org/),
[beautifulsoup](https://www.crummy.com/software/BeautifulSoup/) or
[lxml](http://lxml.de/).

I have chosen lxml because it was new to me and I really enjoy working
with new things. So after reading documentation about lxml I found out
that most of scraping is done via
[XPATH](https://developer.mozilla.org/en-US/docs/Web/XPath).

Syntax and how to use XPATH is for another post, but I end up with very
long queries like:

```python
for elem in parsed_page.xpath('{root}//child::p[not(contains(@class, "article-tags")) '
                                   'and not(contains(@class, "article-info"))] '
                                   '| {root}//a[contains(@href, "author")]'
                                   '| {root}//em '
                                   '| {root}//img '
                                   '| {root}//span'.format(root=self.xpath_root)):
```

As you can see I take elements that are not paragraphs with class
`article-tags` and `article-info`. Moreover I pull out the author and
`em` and `img` tags with contents.

What did I learn about lxml? I really enjoyed using XPATH which is
easily provided by this library. I also was able to get python
representation of html object retrieved by XPATH. What I don't like is
that sometimes installing lxml can cause memory problems as well as you
need to install some packages first (system wide).

Another thing that I try was TDD (Test Driven Development). I have used
in on code dojo before but no in _real_ project. The first thing that I
learned was to use TDD only for production code- I was trying to test
code that supposes to be playground and I wasn't able to do this. But
after designing how it suppose to work, TDD actually helps. Thanks to
that method I have to create such small functions or classes that they
will be easily testable. Moreover, I have a lot html in test because it
is a web crawler so I created a _mocked_ web pages to be the same as
real one. What is more test allows me to change my code and see if there
is any place that my program is broken.

After development, I use my test in
[tox](https://pypi.python.org/pypi/tox). For using tox I change a bit
imports and some pieces of code to let the test be run in a proper way.
Learning how to organize imports to let package be installable from
setup.py was another new experience.

After parsing html I wanted to generate my own html document with all
subpages into. At first, I used
[dominate](https://github.com/Knio/dominate) library but I then I
switched to [pyxml](http://py.readthedocs.io/en/latest/xml.html). Mainly
because I need something easy and simple to just generate html. Pyxml
API is very simple:

```python
doc = html.html(
    html.head(
        # python don't allow keyword args with hypens
        html.meta(content="text/html; charset=utf-8", **{"http-equiv": "Content-Type"}),
        _get_tile(html, pages)
        ),
    html.body(
        html.div(_generate_body(html, pages, tempdir), id='article'),
    )
)
```

This piece of code actually will generate the whole html.

Then thanks to amazon I can just send html to my kindle and it will be
automatically converted to mobi. The one problem with this approach is
that I cannot send the whole html with images so I have to generate mobi
locally and send it to the ebook reader. I did this by calling
[kindlegen](http://www.amazon.com/gp/feature.html?docId=1000765211). It
works really good but the license stays that I can't redistribute it so
enduser have to download it manually. Whole html file with pictures was
in the same directory, then I called kindlegen on html file:

```python
proc = subprocess.Popen(
    [
        os.environ.get('KINDLEGEN'),
        os.path.join(html_dir_path, 'histmag.html'),
        '-o',
        output
    ],
    stdout=subprocess.PIPE, stderr=subprocess.STDOUT
)
```

To call external binay I used
[subprocess](https://docs.python.org/3/library/subprocess.html) library.

Lastly, I send a simple email via [mailgun](https://www.mailgun.com/).
It could be done in better way with my own domain, because right now
end user has to provide `mailgun_api_key` and `email_server` for sending
messages to kindle.

## What can be done differently?

I believe that whole crawling mechanism should be redesigned due to
being synchronous. Moreover, next time I will try beautifulsoup for
getting particular elements from html tree. I would also like to try
generating epub file instead of mobi.

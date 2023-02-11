---
title: Archives from memory- libarchive
pubDate: 2016-09-25
slug: 2016/archives-from-memory-libarchive
---

**This blog post is about python wrapper around libarchive and how to
use it to generate archive from memory.**

## Libarchive & python-libarchive-c

If you happen to learn more about how to create archives in various
formats like tar, iso or zip I bet you heard about
[libarchive](http://www.libarchive.org/). It is widely used archive
library written in C.

To use it within python you can choose from a few libraries but one that
is currently maintained is called
[python-libarchive-c](https://github.com/Changaco/python-libarchive-c).
When in my work I was to implement the feature of adding entries to
archive from memory I decided to use existing module and give something
back to a community in form of an open source contribution.

## Add entry from memory

To make such a feature I have to reread carefully code examples in
libarchive c itself. I also get familiar with few archive formats and
their limitations. But enough talking lets jump to the code:

```python
import requests
import libarchive

def create_archive_from_memory_file():
    response = requests.get('link', stream=True)

    with libarchive.file_writer('archive.zip', 'zip') as archive:
        archive.add_file_from_memory(
            entry_path='filename',
            entry_size=int(response.headers['Content-Length']),
            entry_data=response.iter_content(chunk_size=1024)
        )

if __name__ == '__main__':
    create_archive_from_memory_file()
```

My changes in code have not been released so make sure that you install
python-libarchive-c from github like this (to run this script you also
need requests library):

```shell
$ pip install git+https://github.com/Changaco/python-libarchive-c
```

In this snippet, I use request feature that doesn't require loading the
whole content of the response to memory but instead I add the argument:
`stream=True` and then I use `response.iter_content(chunk_size=1024)`.
Rest of the code is calling `add_file_from_memory` with a path
(`entry_path`) and size of the entry in an archive (`entry_size`).

Under the hood, python-libarchive-c is using
[c_types](https://docs.python.org/3.5/library/ctypes.html) with ffi to
call libarchive functions. At first, it setup path to entry then sets
its size, filetype and permission which file will be saved in the
archive. Then write the header and start iterating through the
`entry_data` by chunks and write them. At the end, header is set and
archive is ready for user.

To see it in action have snippet above as example.py and run this
script:

```shell
$ python example.py
$ ls -la
-rw-r--r--. 1 kzuraw kzuraw 11M 09-24 13:04 archive.zip
-rw-rw-r--. 1 kzuraw kzuraw 511 09-24 12:59 example.py
```

That's all for this week.

Special thanks to Kasia for being editor for this post. Thank you.

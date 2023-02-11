---
title: Python imports validation
pubDate: 2017-09-24
slug: 2017/python-imports-validation
---

**Recently a colleague from work presented to me a nice pattern. I
immediately decided to write about it. This blog post is all about this
pattern! Let's get started!**

This pattern is useful when working with python modules. When you import
module code inside this file gets executed. All of it. This can lead to
a nice way of validation. But what can you validate? For example, if
given module is configured properly before starting working with it or
maybe you need to tell the user that this module can be used only on
Linux.

How does this pattern works? It's very simple yet effective. Imagine
that you have a module called `windows_utils`:

```python
import platform

if platform.system() != 'Windows':
    raise ImportError('This module works only on Windows')


def some_function():
    print("I'm doing something")
```

If I'm about to import function from this module I can expect this to
happen:

```shell
>>> from windows_utils import some_function
---------------------------------------------------------------------------
ImportError                               Traceback (most recent call last)
<ipython-input-1-1ed2a6723517> in <module>()
----> 1 from windows_utils import some_function

~/Development/personal-blog-projects/blog_python_import/windows_utils.py in <module>()
    2
    3 if platform.system() != 'Windows':
----> 4     raise ImportError('This module works only on Windows')
    5
    6

ImportError: This module works only on Windows
```

As you can see the side effects of such import can be useful! That's all
for today! And special thanks for Maniek!

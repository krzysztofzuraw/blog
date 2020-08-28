---
title: Python & WebDAV- part two
date: '2016-09-18T10:00Z'
slug: '/blog/2016/python-webdav-part-two'
tags:
  - python
  - webdav
---

**In the last post, I set up owncloud with WebDAV server. Now it's time
to use it.**

## Python WebDAV client - easywebdav

I was searching for good python library to work with WebDAV for a long
time. I finally found it-
[easywebdav](https://github.com/amnong/easywebdav). It works nicely but
the problem is that doesn't have support for python 3. Let's jump
quickly to my simple project for cli tool- webdav editor.

## WebDAV editor

I decided to create cli tool to work with WebDAV server- webdav editor.
Right now it supports only basic commands like login, listing the
content of directories, uploading and downloading files.

I started from creating file `webdav_utility.py`:

```python
from urlparse import urlparse
import easywebdav


class Client(object):

    def login(self, *args):
        argparse_namespace = args[0]
        url_components = urlparse(argparse_namespace.server)
        host, port = url_components.netloc.split(':')
        webdav_client = easywebdav.connect(
            host=host,
            port=port,
            path=url_components.path,
            username=argparse_namespace.user,
            password=argparse_namespace.password
        )
        pickle.dump(webdav_client, open('webdav_login', 'wb'))

    def list_content(self, *args):
        argparse_namespace = args[0]
        print [i.name for i in webdav_client.ls(argparse_namespace.path)]

    def upload_file(self, *args):
        argparse_namespace = args[0]
        webdav_client.upload(
            argparse_namespace.from_path, argparse_namespace.to_path
        )

    def download_file(self, *args):
        argparse_namespace = args[0]
        webdav_client.download(
            argparse_namespace.from_path, argparse_namespace.to_path
        )
```

In class `Client`, I write simple functions that are wrappers around
`easywebdav` API. In `login` I parse provided URL in form like
localhost:8888/owncloud/remote.php/webdav to get `host`, `port` and
`path` for `easywebdav.connect` to establish a proper connection.

Another method that is worth mentioning is `list_content` where I
retrieve names of files under a directory on WebDAV server. In every
method I provide `*args` argument and `argparse_namespace` which leads
to another component of application- module `cli.py`:

```python
import argparse

from webdav_utility import Client

client = Client()

parser = argparse.ArgumentParser(description='Simple command line utility for WebDAV')
subparsers = parser.add_subparsers(help='Commands')

login_parser = subparsers.add_parser('login', help='Authenticate with WebDAV')
login_parser.add_argument('-s', '--server', required=True)
login_parser.add_argument('-u', '--user', required=True)
login_parser.add_argument('-p', '--password', required=True)
login_parser.set_defaults(func=client.login)

ls_parser = subparsers.add_parser('ls', help='List content of directory under WebDAV')
ls_parser.add_argument('-p', '--path', required=True)
ls_parser.set_defaults(func=client.list_content)

upload_parser = subparsers.add_parser('upload', help='Upload files to WebDAV')
upload_parser.add_argument('-f', '--from', metavar='PATH')
upload_parser.add_argument('-t', '--to', metavar='PATH')
upload_parser.set_defaults(func=client.upload_file)

download_parser = subparsers.add_parser('download', help='Download files from WebDAV')
download_parser.add_argument('-f', '--from', metavar='PATH')
download_parser.add_argument('-t', '--to', metavar='PATH')
download_parser.set_defaults(func=client.download_file)

if __name__ == '__main__':
    args = parser.parse_args()
    args.func(args)
```

There I use
[argparse](https://docs.python.org/2.7/library/argparse.html). I create
the main parser with four additionals subparsers for `login`, `ls`,
`upload` and `download`. Thanks to that I have different namespace for
every one of previously mentioned subparsers.

Problem is that this solution is not generic enough because after
running my command with `login` parameter I can get:
`Namespace(server='localhost:8888', user='admin', password='admin')` and
running the same command but with `ls` I will receive:
`Namespace(path='path_to_file')`. To handle that I used `set_defaults`
for every subparser. I tell argparse to invoke function specified by
`func` keyword (which is different for every command). Thanks to that I
only need to call this code once:

```python
if __name__ == '__main__':
    args = parser.parse_args()
    args.func(args)
```

That's the reason I introduce `argparse_namespaces` in `Client`.

OK, tool right now works nicely, but there is no place to store
information if I am logged or not. So calling
`python cli.py login -s localhost -u admin -p admin` works but
`python cli.py ls -p /` not. To overcome that I came up with an idea to
pickle `webdav_client` like this:

```python
class Client(object):

  def login(self, *args):
    # login user etc
    pickle.dump(webdav_client, open('webdav_login', 'wb'))

  def list_content(self, *args):
    webdav_client = pickle.load(open('webdav_login', 'rb'))
    # rest of the code
```

Then I can easily run:

```shell
$ python cli.py login --server example.org/owncloud/remote.php/webdav --user admin --password admin
$ python cli.py ls --path '/'
['/owncloud/remote.php/webdav/', '/owncloud/remote.php/webdav/Documents/', '/owncloud/remote.php/webdav/Photos/', '/owncloud/remote.php/webdav/ownCloud%20Manual.pdf']
```

## Conclusion

In this series, I setup an owncloud server and write simple tool just to
show capabilities of WebDAV. I believe that some work, especially for
webdav editor cli can still be done: the better way to handle user auth
than pickle, separate `Client` class from argparse dependencies. If you
have additional comments or thoughts please write a comment! Thank you
for reading.

Special thanks to Kasia for being editor for this post. Thank you.

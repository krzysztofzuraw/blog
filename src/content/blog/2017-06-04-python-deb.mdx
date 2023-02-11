---
title: Building python packages for debian
pubDate: 2017-06-04
slug: 2017/building-python-packages-for-debian
---

**There are many ways how to build & distribute python packages: pypi,
devpi. But if you happen to use debian based OSes you can build python
packages as debian native ones. This blog post is all about it - let's
go!**

Let's say you have following structure of your project:

```shell
├── Makefile
├── MANIFEST.in
├── requirements.txt
├── setup.py
└── src
    └── python_deb_pkg
        ├── __init__.py
        └── main.py
```

How to pack it for debian? First create a new folder in root directory
of your project: `debian`. Then create a couple of files that are
required to properly build the package:

`changelog`:

```
python-deb-pkg (0.1.0-1) UNRELEASED; urgency=low

* python-deb-pkg: Initial debian packaging

-- Krzysztof Zuraw Sat, 3 Jun 2017 12:34:56 +0000
```

`compat`:

```
9
```

`control`:

```
# ------------------------------------------------------------------------- #
# DEBIAN PACKAGE CONTROL FILE                                               #
#                                                                           #
# This file is a Debian control file. For more information on the config in #
# this file, please run `man deb-control`.                                  #
# ------------------------------------------------------------------------- #

Source: python-deb-pkg
Section: contrib/python
Priority: extra
Maintainer: Krzysztof Żuraw
Build-Depends: debhelper (>= 9), python3.5, python3-setuptools, dh-virtualenv (>> 0.6)
Standards-Version: 3.9.5

Package: python-deb-pkg
Architecture: any
Pre-Depends: dpkg (>= 1.16.1),  python3.5
Depends: make
Description: python-deb-pkg service
```

`copyright`:

```
Copyright (c) 2017+, Krzysztof Żuraw

MIT Licensed.

**TODO** Copy main project's license file here.
```

and `rules`:

```makefile
#!/usr/bin/make -f

%:
    dh $@ --with python-virtualenv

override_dh_virtualenv:
    dh_virtualenv --python /usr/bin/python3.5 \
        --setuptools

override_dh_builddeb:
    dh_builddeb --destdir=/tmp/python-deb-pkg/debian/dist
```

`Changelog` will tell debian packaging tools what version they need to
build. `Compat` contains a magic number for compatibility issues.
`copyright` is license and rights. One of the two most important files
is `control`. It tells what are dependencies that need to be resolved
before the package will be built and installed. Second is `rules` that
have makefile like syntax and specify how a package will be built.

I'm using here really cool package called
[dh-virtualenv](https://github.com/spotify/dh-virtualenv). It is
doing all hard work: making sure that virtualenv is correctly setup or
files are in their places. In my example, I tell dh_virtualenv to use
python3.5 which is by default in ubuntu 16.04. In `override_dh_builddeb`
I specified where build package should be present
`root_folder/debian/dist`.

How to use all these files combined? I use docker for that! I have
`Dockerfile` inside debian folder:

```docker
FROM ubuntu:16.04
MAINTAINER Krzysztof Zuraw


RUN apt-get update && apt-get install --yes \
        software-properties-common \
        build-essential \
        debhelper \
        devscripts \
        equivs \
        python3-dev


ADD ./debian/control /tmp/python-deb-pkg/debian/control
RUN mk-build-deps --install /tmp/python-deb-pkg/debian/control --tool "apt-get --allow-downgrades --yes"

WORKDIR /tmp/python-deb-pkg

ADD . /tmp/python-deb-pkg
```

The most interesting line here is the one that builds and install build
dependencies for my package - `mk-build-deps`.

Everything is controlled via `Makefile` inside the main folder:

```makefile
.PHONY: deb deb-build-env deb-enter-docker

    deb-build-env:
        docker build \
            --file=./debian/Dockerfile \
            --tag=python-deb-pkg \
            ./

    deb: deb-build-env
        if [ ! -d ./debian/dist ]; then \
            mkdir ./debian/dist; \
        fi;
        if [ -e ./debian/dist/*.deb ]; then \
            sudo rm ./debian/dist/*.deb; \
        fi;
        docker run \
            --volume=$$(pwd)/debian/dist:/tmp/python-deb-pkg/debian/dist \
            python-deb-pkg dpkg-buildpackage -us -uc -b --changes-option=-udebian/dist/

    deb-enter-docker:
        docker run \
            --interactive \
            --tty=true \
            --volume=$$(pwd):/tmp/python-deb-pkg \
            python-deb-pkg /bin/bash
```

`deb` rule is creating a debian package inside docker by
`dpkg-buildpackage -us -uc -b --changes-option=-udebian/dist/` which
means that deb file won't be signed and exit directory should be
`debian/dist`.

And thats all for today! Repo is available under this
[address](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/python_deb_pkg).
Feel free to comment!

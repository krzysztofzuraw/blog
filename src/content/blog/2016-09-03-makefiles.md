---
title: Makefiles in python projects
pubDate: 2016-09-03
slug: 2016/makefiles-in-python-projects
---

**When I join my current company I saw in their git repos strange file.
It wasn't used by any python code. It sits in the main directory of
the project. I asked my colleagues what is this file for? They told me-
to make your life easier. That's why today I write about this file-
Makefile.**

## What is makefile and what is it typical use

From this
[tutorial](http://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/):

> Makefiles are a simple way to organize code compilation.

Typically they are used in writing C programs to ease all stuff that
needs to be done before code can be used as a program. You can specify
rules to tell [make](https://www.gnu.org/software/make/) how to compile
your programs. Simple makefile for C code can be as follows:

```makefile
helloword: helloword.c
    gcc -o hellword hellword.c -I.
```

Then running:

```shell
$ make helloword
```

you compile C code using gcc.

How is this even connected with python? This programming language is
compiled itself while invoked so it doesn't need any makefiles to work.
As I said in the beginning in python projects you can ease your life and
save a lot of keystrokes using makefile.

## What specific to python you can put in makefile

Have you ever wanted to clean up `.pyc` files from your project or
remove artifacts after building python packages? Or maybe you want to
run tests with coverage? Use pep8, lint or isort? Maybe run the
application in docker container and end up writing commands that are too
long for your screen?

This is where makefile comes. You can have everything kept in one place
and use only `make clean` to clean up unnecessary files or `make tests`
to test your application.

Let start with some examples from makefile that I am using:

```makefile
HOST=127.0.0.1
TEST_PATH=./

clean-pyc:
    find . -name '*.pyc' -exec rm --force {} +
    find . -name '*.pyo' -exec rm --force {} +
   name '*~' -exec rm --force  {}

clean-build:
    rm --force --recursive build/
    rm --force --recursive dist/
    rm --force --recursive *.egg-info

isort:
    sh -c "isort --skip-glob=.tox --recursive . "

lint:
    flake8 --exclude=.tox

test: clean-pyc
    py.test --verbose --color=yes $(TEST_PATH)

run:
    python manage.py runserver

docker-run:
    docker build \
      --file=./Dockerfile \
      --tag=my_project ./
    docker run \
      --detach=false \
      --name=my_project \
      --publish=$(HOST):8080 \
      my_project
```

At the beginning, I add two variables `HOST` and `TEST_PATH` for every
command to use them. Rule `clean-pyc` finds all files that end with
`*.pyc`, `*.pyo` or `*~` and delete them. The plus sign at the end of
the command is for `-exec command {}` which means that the total number
of invocations of the command will be much less than the number of
matched files.

Next one `clean-build` is for removing build artifacts. In `isort` shell
is executing isort command with proper attributes, `-c` flag is for
reading commands from a string rather than from standard input. `lint`
and `run` works on the same pattern. In `test` I added the additional
rule to execute before actual tests- `clean-pyc`. Last `docker-run` rule
builds and runs docker.

Additional things that you want to add is something called `PHONY`. By
default, makefile operates on files so if there will be a file called
`clean-pyc` it will try to use it instead of a command. To avoid this
use `PHONY` at the beginning of your makefile:

```makefile
.PHONY: clean-pyc clean-build
```

I also like to have help function for my makefile so I put this
somewhere inside:

```makefile
    @echo "    clean-pyc"
    @echo "        Remove python artifacts."
    @echo "    clean-build"
    @echo "        Remove build artifacts."
    @echo "    isort"
           Sort import statements.
    @echo "    lint"
    @echo "        Check style with flake8."
    @echo "    test"
    @echo "        Run py.test"
    @echo '    run'
    @echo '        Run the `my_project` service on your local machine.'
    @echo '    docker-run'
    @echo '        Build and run the `my_project` service in a Docker container.'
```

There is `@` before each `echo` because by default `make` prints every
line to the console before it's executed. `At` sign is to suppress this
and `@` is discarded before line is passed to the shell.

But what if I wanted to run my application on different host and port
using makefile? It's simple - add:

```makefile
run:
    python manage.py runserver --host $(HOST) --port $(PORT)
```

Then you can run:

```shell
$ make run HOST=127.0.0.1 PORT=8000
```

Lastly be aware that indentation in makefile has to be made using TAB,
not spaces.

## What benefit you can have by using makefile in python projects

As you can see using makefile in python projects can bring many good
things. If you are tired of writing complicated shell commands- put them
under a rule in the makefile. Want other people easily run tests against
your project? Put pytest calls in makefile. Ideas are endless.

Do you use makefile in your project? Do you find it useful or maybe
not? What else you put inside? Please write it in comments!

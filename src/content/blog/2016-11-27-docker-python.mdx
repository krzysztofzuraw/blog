---
title: Docker.py - python API for Docker
pubDate: 2016-11-27
slug: 2016/docker-python-api-for-docker
---

**Once upon a time I and my friend decided to write an application that
helps us doing code kata. The first problem that we faced was how to run
a code provided by the user in a safe manner so our server won't be
destroyed. After giving it some thought I decided to write a prototype
of an application that runs the code inside Docker container which is
immediately destroyed after the code has been run. This blog post is
about this prototype.**

## Assumptions

I need an application that gets a code from the user, executes it and
gives output back. As many people before me said output from user cannot
be trusted so I need to use some kind of container for user input. To do
that I used Docker python API-
[docker.py](https://github.com/docker/docker-py). Using that and Flask I
created Tdd-app-prototype. Under the hood, this application will work
like this: user writes a code on a website, clicks submit. Then Docker
creates a container based on python docker image and executes code. I
take the output from the container and destroy it afterwards.

As we know what application should do, let's jump into the code.

## Code

The first problem that I have is that I don't want to write a code
provided by the user to a disk, then read it from the disk and it
execute by Docker. I want to store it in memory - perfect case for
[StringIO](https://docs.python.org/3/library/io.html#io.StringIO). Code
that does this looks as follows:

```python
@app.route("/send_code", methods=['POST'])
def execute_code():
  data = request.form['source_code']
  code = io.StringIO(data)
  create_container(code)
  output = get_code_from_docker()
  return output
```

Here beside specifying routes in Flask I take data from the form, cast
it to `StringIO` and create a container from that code. Function that
does that is below:

```python
def create_container(code):
  cli.create_container(
       image='python:3',
       command=['python','-c', code.getvalue()],
       name='tdd_app_prototype',
  )
```

What is `cli` here? I can use docker.py with Docker from other than my
own computer location so before I can use any of these functions I need
to specify `Client`:

```python
cli = Client(base_url='unix://var/run/docker.sock')
```

It tells docker.py to use my local Docker. Let's go back to
`create_container`. I tell docker.py to use official python 3 images.
Then I specify a command to run: `python -c` and my code from
`StringIO`. If you want to run standalone python script you can use
this:

```python
def create_container(code):
  cli.create_container(
       image='python:3',
       command=['python','-c', 'my_code.py'],
       volumes=['/opt'],
       host_config=cli.create_host_config(
           binds={ os.getcwd(): {
               'bind': '/opt',
               'mode': 'rw',
               }
           }
       ),
       name='tdd_app_prototype',
       working_dir='/opt'
  )
```

`volumes` and `host_config` keywords are for telling Docker to mount
[volumes](https://docs.docker.com/engine/reference/run/#/volume-shared-filesystems).
It is the same as running `docker run -v "$PWD":/opt`. Finally I set up
`working_dir` so I don't need to provide a full path to `my_code.py`. As
we have a container created now it is time to start it:

```python
def get_code_from_docker():
  cli.start('tdd_app_prototype')
  cli.wait('tdd_app_prototype')
  output = cli.logs('tdd_app_prototype')

  cli.remove_container('tdd_app_prototype', force=True)

  return "From docker: {}".format(output.strip())
```

I used here `wait` so I wait for the container to stop. Then I take
output in form of lists and remove the container.

That's all for today! If you want to see full code grab it
[here](https://github.com/krzysztofzuraw/tdd-app-prototype). Do you know
other ways of using docker.py?

Special thanks to Kasia for being editor for this post. Thank you.

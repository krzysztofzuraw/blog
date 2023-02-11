---
title: Factory pattern in python
pubDate: 2016-08-07
slug: 2016/factory-pattern-in-python
---

What is factory pattern all about? It introduces abstraction. In other
words: helps software developers with the problem of creating objects
without knowing exact class of the object that will be created.

Why use it? From [programmers stack
exchange](http://programmers.stackexchange.com/questions/253254/why-should-i-use-a-factory-class-instead-of-direct-object-construction):

> (...) they allow the project to follow the SOLID principles more
> closely. In particular, the interface segregation and dependency
> inversion principles.
>
> Factories and interfaces allow for a lot more long term flexibility.
> It allows for a more decoupled - and therefore more testable - design.
> (...)
>
> - It allows you to introduce an IoC container easily
> - It makes your code more testable as you can mock interfaces
> - It gives you a lot more flexibility when it comes time to change
>   the application (i.e. you can create new implementations without
>   changing the dependent code)

As we know why to use it let's jump into the code:

```python
class BaseArchive(object):
    EXTENSION = None

    def __init__(self, location_path, files_to_pack):
        self.location_path = location_path
        self.files_to_pack = files_to_pack

    def generate(self):
        raise NotImplementedError()
```

At first, I created a simple base class to have a common interface for
all archive classes. There is nothing sophisticated here: only setting
up all necessary arguments in `__init__` and telling that all children
of `BaseArchive` have to implement `generate` method. Let's look how
these children look like:

```python
from zipfile import ZipFile
import tarfile


class ZIPArchive(BaseArchive):
    EXTENSION = 'zip'

    def generate(self):
        with ZipFile('{}.{}'.format(self.location_path, self.EXTENSION), 'w') as zip_file:
            for file_ in self.files_to_pack:
                zip_file.write(file_)


class TARArchive(BaseArchive):
    EXTENSION = 'tar'

    def generate(self):
        with tarfile.open('{}.{}'.format(self.location_path, self.EXTENSION), 'w') as tar_file:
            for file_ in self.files_to_pack:
                tar_file.add(file_)
```

`ZIPArchive` and `TARArchive` classes have `generate` method
to create archives in given format using `ZipFile` or `tarfile` modules
from standardlib as follows:

```python
zip_archive = ZIPArchive(os.path.join(os.getcwd(), 'zip'), ['for_zip'])
zip_archive.generate()
tar_archive = TARArchive(os.path.join(os.getcwd(), 'tar'), ['for_tar.txt'])
tar_archive.generate()
```

Then the real fun begins. Say I want to generate archive only by
providing path and files to pack into the archive. For this purpose I
use something called `ArchiveManager` which is factory:

```python
class ArchiveManager(object):
    ARCHIVE_ENGINES = [ZIPArchive, TARArchive]

    def __init__(self, location_path, files_to_pack):
        self.location_path = location_path
        _, self.extension = os.path.splitext(location_path)
        self.files_to_pack = files_to_pack
        self.archive_engine = self.choose_archive_engine()

    def choose_archive_engine(self):
        for engine in self.ARCHIVE_ENGINES:
            if engine.check_extenstion(self.extension):
                return engine(self.location_path, self.files_to_pack)

    def create_archive(self):
        self.archive_engine.generate()
```

Here I have `ARCHIVE_ENGINES` class attribute for every archive engine
that I want to use. Below in `__init__` I setup all necessary attributes
with extension to use in `choose_archive_engine`. Here is the place
where factory pattern starts to work: I iterate through all engines to
`check_extenstion` and if there is a match I return the correct
engine to `self.archive_engine`. To use that I need to write some more
code in `BaseArchive`:

```python
class BaseArchive(object):

  # rest of the code

  @classmethod
  def check_extenstion(cls,extension):
      return extension == cls.EXTENSION:
```

This `check_extenstion` that is classmethod helps me in figuring out
which underlying archive class should I use. Thanks to that in
`ArchiveManager.create_archive` I only need to provide
`self.archive_engine.generate()`. This method doesn't know if there is
`ZIPArchive` or `TARArchive` class being used.

This was quick introduction how to use factory pattern in python. The
code for this is available in this
[repo](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/factory_pattern).
Do you know more usages? Or maybe you don't agree with what I write-
feel free to comment.

## Edits (12.08.2016):

- Refactor of `check_extenstion` method

## Edits (30.07.2017):

- Add missing EXTENSION parameter (by Jayesh Pawar)

## Edits (07.06.2018):

- Fixed this [bug](https://github.com/krzysztofzuraw/blog-projects/issues/1) - thanks to [con-f-use](https://github.com/con-f-use)

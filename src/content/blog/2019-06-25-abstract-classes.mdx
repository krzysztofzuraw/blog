---
title: TypeScript abstract classes
pubDate: 2019-06-25
slug: 2019/typescript-abstract-classes
---

Hello,
Today I want to give you a blog post about abstract classes in TypeScript. What are they?
Why you may need one? Or why you may not need it.

I assume that you have grasp of TypeScript and object oriented programming.

Let's get started 🎉.

## What are abstract classes

What exactly is `abstract class`? This concept is not bound only to TypeScript.
Most of object oriented languages have concept of abstract classes. Abstract means that
given class can be used to build other classes. For instance by inheritance. One of the
important distinction between normal class is that you can't instantiate abstract class.

```ts
abstract class Point {
    x: string;
    y: string;
}

class Marker extends Point {
}

const point = new Point();
              ^ Cannot create an instance of an abstract class.
const marker = new Marker();
```

You may ask what is the difference here between interface and abstract class? The main
one is that the latter can have implementation details. Let's look at this example:

```ts
interface User {
  name: string;

  getName();
}

abstract class AbstractUser {
  name: string;
  getName() {
    return this.name;
  }
}

class UserClass extends AbstractUser {}

const user = new UserClass();
user.getName();
```

You can specify that interface User has to have `get_name` but you cannot provide it's implementation
in the same place like in example with abstract class.

## Where abstract classes may come handy

If you want to share properties or methods between more classes. Like in this example:

```ts
abstract class AbstractUser {
  name: string;
  getInfo() {
    return this.name;
  }
}

class EnterpriseUser extends AbstractUser {
  enterpriseLogin: string;
  getInfo() {
    return super.getInfo() + this.enterpriseLogin;
  }
}

class PasswordUser extends AbstractUser {
  email: string;
  getInfo() {
    return super.getInfo() + this.email;
  }
}
```

You can make methods on class abstract too. Thanks to that all classes that implements this class
need to have those methods implemented:

```ts
abstract class AbstractUser {
  name: string;
  abstract getInfo() {}
}

class WrongUser extends AbstractUser {}
      ^ Non-abstract class 'WrongUser' does not implement inherited abstract member 'getInfo' from class 'AbstractUser'.
```

## Summary and TL;DR

Abstract class in TypeScript can be created with `abstract` keyword before name of class. It is
mainly used as a way of sharing implementations between classes that implements those abstract
classes. You can find more info about them on [TypeScript handbook](https://www.typescriptlang.org/docs/handbook/classes.html).

If you have any questions about abstract classes please write to me: krzysztofzuraw(at)fastmail.com.

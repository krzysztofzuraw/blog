---
title: TypeScript classes, interfaces and all between
date: '2019-03-25T10:20Z'
slug: '/blog/2019/typescript-classes-interfaces.html'
tags:
  - typescript
---

# Hello 👋

What is a better way of explaining classes & interfaces than showing them in action?
One of the clever use of classes I saw is this connected to validating response from API.

Most of the current TypeScript or JavaScript application needs to somehow connect to API. How do you
parse those JSON and use them in all your application? One of the patterns I use in my project
is one using DTOs - it stands for data transfer objects. Why do I need such things as DTOs?

To have your application to operate on the same values and object through all the application, also
to validate incoming data to an application.

## DTOs in action

If you read 👆paragraph - congratulations 🎉. Let's jump straight into the code so you don't get
bored:

```typescript
axios.get<{ user: IUserDTO }>('api/users/1').then(res => UserModel.create(res.data));
```

I'm using `IUserDTO` to tell axios what response I may get from API - in my case, it will be:

```ts
interface IUserDTO {
  name: string;
  password_hash: string;
  email?: string;
  is_super_user: boolean;
}
```

which translates roughly to JSON:

```json
{
  "user": {
    "name": "John",
    "password_hash": "42",
    "email": "john@example.com",
    "is_super_user": true
  }
}
```

In `then` you may see `UserModel.create` - this is an entry point to user model to our application.

## Models usage

From right on I will use only `UserModel` in my redux store, selectors or in components. Like here:

```ts
// actions
interface getUserSuccess {
  type: 'GET_USER_SUCCESS';
  user: IUserModel;
}

// state
type State = Readonly<{
  user: IUserModel | null;
  isFetching: boolean;
}>;
```

## Types vs interfaces

At the bottom of the snippet is another way of declaring type - `type`. What is the difference between
`type` or `interface`? They are used in for the same thing - telling TypeScript what kind of shape
and types of values you expect. I personally use `interface` more often as they allow me to extends
itself like:

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  isBarking: boolean;
}

const rex: Dog = { isBarking: true, name: 'Rex' };
```

Yet there are casses where I use `type` - for example when I have react `Props` declaration:

```ts
type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps & OwnProps;
```

## Go back to models

I have `UserModel` class here:

```ts
class UserModel implements IUserModel {
  constructor(
    public name: string,
    passwordHash: string,
    public isSuperUser: boolean,
    email?: string
  ) {}

  static create(dto: IUserDTO): UserModel {
    return new UserModel(dto.name, dto.password_hash, dto.is_super_user, dto.email);
  }
}
interface IUserModel {
  name: string;
  passwordHash: string;
  email?: string;
  isSuperUser: boolean;
}

interface IUserDTO {
  name: string;
  password_hash: string;
  email?: string;
  is_super_user: boolean;
}
```

At the beginning, it may seem that there is a lot going on here but let's start from the top.
First I tell `UserModel` class to implement `IUserModel`. `IUserModel` is the interface. It means that all objects that have the same fields of the same type fulfill interface. In case above
when `UserModel` implements `IUserModel` is has to have: `name`, `password`, `isSuperUser` &
`email`. I make sure it has in `constructor`.

If I have an object:

```ts
const user: IUserModel = {
  name: 'Evil user',
  password: '',
  isSuperUser: true,
  evil: true,
};
```

that has additional property (like `evil`) TypeScript will tell me that:

```plain
Type '{ name: string; passwordHash: string; isSuperUser: true; evil: boolean; }' is not assignable to type 'IUserModel'.
  Object literal may only specify known properties, and 'evil' does not exist in type 'IUserModel'.ts
```

The naming of the interfaces can be the same as the naming of classes that implements those interfaces.
Yet I added `I` as a prefix to denote that I'm using an interface here.

Going back to the constructor. I have there something called `public` before each one of the arguments to `constructor` method. This is shorthand for:

```ts
class UserModel implements IUserModel {
  constructor(name, passwordHash: string, isSuperUser: boolean, email?: string) {
    this.name = name;
    this.passwordHash = passwordHash;
    this.isSuperUser = isSuperUser;
    this.email = email;
  }
}
```

Then I can create new class using `new` keyword: `new UserModel('Krzysztof', '134', true, 'kz@example.com')`.

The last missing piece is `static create()` method. Keyword `static` means that method is not
bound to instance of the class. So you don't need to write:

```ts
const user = new UserModel('Krzysztof', '134', true, 'kz@example.com');
user.create();
```

You can use it without instantiating class first - `UserModel.create()` which I'm using in my
API call code. In the body of `create` I just create a new class to work with.

### Summary & TL;DR

I'm using classes with TypeScript interfaces to accomplish: validation of data coming & incoming
from the application. Types are also great but for situations where I can glue together different types
like `interfaces` & `ReturnTypes`.

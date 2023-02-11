---
title: Yup validation - one field required but not both at the same time
pubDate: 2020-03-05
slug: 2020/yup-validation-one-field-required-but-not-both-at-the-same-time
---

Recently I was working with [yup](https://github.com/jquense/yup) for form validation and
I faced the following problem:

I have two fields inside my form. I want the user to provide one of them but not both at the same time.
I've played a little bit with different ideas to get solution below. It is using [test](https://github.com/jquense/yup#mixedtestname-string-message-string--function-test-function-schema) and [when](https://github.com/jquense/yup#mixedwhenkeys-string--arraystring-builder-object--value-schema-schema-schema) functions
from yup:

```tsx
import { object, string } from 'yup';

const schema = object().shape(
  {
    userName: string()
      .test(
        'notBothAtTheSameTime', // test name
        'You cannot pass user name at the same time as user email', // validation message to the user
        // it has to be function definition to use `this`
        function(userName) {
          const { userEmail } = this.parent;
          if (userEmail && userName) {
            return false; // when user enters both userEmail & userName do not validate form
          }
          return true;
        }
      )
      .when(['userEmail'], {
        is: userEmail => !userEmail,
        then: string().required('User name is required'),
      }),
    userEmail: string()
      .test(
        'notBothAtTheSameTime',
        'You cannot pass user email at the same time as user name',
        function(userEmail) {
          const { userName } = this.parent;
          if (userName && userEmail) {
            return false;
          }
          return true;
        }
      )
      .when(['userName'], {
        is: userName => !userName,
        then: string().required('User email is required'),
     email
  [['userName', 'userEmail']] // important to add
);
```

If you want you can extract it to its own function via [addMethod](https://github.com/jquense/yup#yupaddmethodschematype-schema-name-string-method--schema-void). That's all 🎉. Now user
should get and error when they provide both `userName` & `userEmail`.

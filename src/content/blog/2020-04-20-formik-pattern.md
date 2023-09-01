---
title: Formik - useFormikContext and useField hooks
pubDate: 2020-04-22
slug: 2020/formik-useformikcontext-and-usefield-hooks
---

As I'm using [Formik](https://jaredpalmer.com/formik/) to build forms inside React applications below
there are some patterns you may enjoy.

## Form

Let's say that you have a form build using formik:

```tsx
import React, { FunctionComponent } from "react";
import { Formik, FieldProps, Field } from "formik";

type FormValues = {
  name: string;
  email: string;
};

const UserForm: React.FunctionComponent = () => {
  return (
    <Formik<FormValues>
      initalValues={{ name: "", email: "" }}
      onSubmit={(values) => sendDataToAPI(values)}
    >
      {(props) => (
        <form onSubmit={props.onSubmit}>
          <Field name="name">
            {({ field }: FieldProps<FormValues>) => <CustomInput {...field} />}
          </Field>
          <Field name="email">
            {({ field }: FieldProps<FormValues>) => <CustomInput {...field} />}
          </Field>
        </form>
      )}
    </Formik>
  );
};

const CustomInput: React.FunctionComponent<JSX.IntrinsicElements["input"]> = ({
  ...props
}) => <input {...props} />;
```

## useField

I want to start with [useField](https://jaredpalmer.com/formik/docs/api/useField). Previously to create a field in formik you have to
first create a [Field](https://jaredpalmer.com/formik/docs/api/field) component and then pass `children` render prop:

```tsx
import { FieldProps, Field } from "formik";

<Field name="name">
  {({ field }: FieldProps<FormValues>) => <CustomInput {...field} />}
</Field>;
```

In 2.0.0 version maintainers introduced a new hook `useField`. It can be use to abstract that `Field`
underneath is `CustomInput`:

```tsx
import React, { FunctionComponent } from "react";
import { useField } from "formik";

const FormikCustomInput: React.FunctionComponent<{ name: string }> = ({
  name,
}) => {
  const [field] = useField(name);
  return <CustomInput {...field} />;
};
```

And then use it inside `UserForm`:

```tsx
<form onSubmit={props.onSubmit}>
  <FormikCustomInput name="name" />
  <FormikCustomInput name="email" />
</form>
```

Where you can use it? In a place where you have multiple forms that use the same `Fields`.

## useFormikContext

Another addition is [useFormikContext](https://jaredpalmer.com/formik/docs/api/useFormikContext).
This is a Formik hook to get [formikBag](https://jaredpalmer.com/formik/docs/api/withFormik#the-formikbag)
(formik values, errors and helpers) in your component. In previous versions you had to use `connect` to get your component into Formik
context. Thanks to this new hook - there is no need for that. Where it can be useful? Inside nested
forms when you don't want to have [prop drilling](https://kentcdodds.com/blog/prop-drilling/) problem.

## Summary

Formik added two new hooks: [useField](https://jaredpalmer.com/formik/docs/api/useField) and [useFormikContext](https://jaredpalmer.com/formik/docs/api/useFormikContext)
to ease creating reusable and nested forms. Be sure to check them out!

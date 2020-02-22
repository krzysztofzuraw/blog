---
title: On React Render props vs HOC
date: '2019-03-18T09:12:03.284Z'
slug: '/blog/2019/react-props-hoc.html'
tags:
  - render props
  - react
  - hoc
---

Recently one of my colleague at work stumbled upon strange case when using one of the popular react pattern called [hoc](https://reactjs.org/docs/higher-order-components.html) (high order component). It turns out that sometimes your hoc can override your passed `props`. Let me explain it a little bit more.

Imagine that you have a `Button` component:

```tsx
import * as React from 'react';

interface OwnProps {
  onClick: () => void;
  amount: number;
  name: string;
}

const Button: React.FunctionComponent<OwnProps> = props => (
  <button onClick={props.onClick}>
    {props.name} {props.amount}
  </button>
);
```

It’s is a small component that takes 3 props. One `onClick` to handle button clicks and the rest two are just for displaying data on the button.

How you can pass props to this button? Let’s agree that you need a higher level of abstraction 😂 and you pass them via `HOC`:

```tsx
import * as React from 'react';

export interface HOCProps {
  onClick: () => void;
}

export const withHOC = <WrappedComponentProps extends object>(
  WrappedComponent: React.ComponentType<WrappedComponentProps>
) => {
  // tslint:disable-next-line:no-console
  const onClick = () => console.log('Clicked! from HOC');

  const HOC: React.FunctionComponent<WrappedComponentProps & HOCProps> = props => {
    return <WrappedComponent {...props} onClick={onClick} />;
  };
  HOC.displayName = `withHOC(${WrappedComponent})`;
  return HOC;
};
```

so this can be used like this:

```tsx
import * as React from 'react';

import { HOCProps, withHOC } from '../hoc';
import { Button } from './button';

interface OwnProps {
  onClick: () => void;
  amount: number;
  name: string;
}

const ButtonHOC = withHOC(Button);

// usage
<ButtonHOC onClick={() => setAmount(amount + 1)} amount={amount} name="HOC button" />;
```

You clap yourself on the back for such a good work - 👏🏻. You abstract away `onClick`.

The code looks fine but it turns out that clicking on button results in `console.log`! But you wanted it to increment amount by one. What is happening?

Your HOC is overriding your component props. To avoid that you will need to change the prop name - so the clashing won’t occur anymore.

Let’s look for another pattern that is common in react world - render props:

```tsx
import * as React from 'react';

export interface OwnProps {
  render: ({ onClick }: { onClick: () => void }) => JSX.Element;
}

export const RenderPropsButton: React.FunctionComponent<OwnProps> = props => {
  // tslint:disable-next-line:no-console
  const onClick = () => console.log('Clicked from renderProps');
  return props.render({ onClick });
};
```

it can be used like this:

```tsx
<RenderPropsButton
  render={renderProps => (
    <Button onClick={renderProps.onClick} amount={amount} name="RenderProps button" />
  )}
/>
```

Will it help? Yes - as we are passing `onClick` via `renderProp`
instead of being directly injected into the component. This allows the developer to see from where this prop is coming and fix it.

## Summary

When render props first came to react world I did not see a clear benefit over hoc. After seeing a similar case like one above - I find them better in terms of readability than hoc.

PS. I know that those examples are overcomplicated. There are here to prove the point.

### TLDR

With render props you can avoid accidental prop override.

---
title: How you properly test your React hook methods
description: You need to wrap your hooks methods in the `act` while testing
pubDate: 2023-08-06T11:19:11Z
slug: 2023/test-react-hooks-methods
---

If you are using [React Hooks testing library](https://react-hooks-testing-library.com) to test your hooks remember to wrap hooks methods in the [`act`](https://react-hooks-testing-library.com/reference/api#act).

For example, if you try to run the test below:

```tsx
import { renderHook } from "@testing-library/react-hooks";

test("test login", () => {
  const { result } = renderHook(() => useAuth());

  result.login();

  expect(result.user).toEqual({ token: "token", user: "Tom Smith" });
});
```

You will get this error message:

```
Warning: An update to TestComponent inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at TestComponent ()
    at Suspense
    at ErrorBoundary ()
```

To fix this you need to wrap the `result.login` call with the `act`:

```diff
-import { renderHook } from "@testing-library/react-hooks";
+import { renderHook, act } from "@testing-library/react-hooks";

test("test login", () => {
  const { result } = renderHook(() => useAuth());

- result.login();
+ act(() => {
+     result.login();
+ });

  expect(result.user).toEqual({ token: "token", user: "Tom Smith" });
});
```

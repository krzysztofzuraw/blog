---
title: HOC for React Query
pubDate: 2022-02-05
slug: 2022/hoc-for-react-query
---

It turns out that [React Query](https://react-query.tanstack.com/) by default uses hooks approach. If you need to access some part of library inside your class components you can use [Render Props](https://stackoverflow.com/questions/65609409/how-can-i-use-react-query-in-a-react-class-component)
pattern. What if you can't use it? Below you will find High Order Component that injects `queryClient` into `WrappedComponent`.

```tsx
interface WithReactQueryClientProps {
  queryClient: QueryClient;
}

function withReactQueryClient<T extends WithReactQueryClientProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithReactQueryClient = (
    props: Omit<T, keyof WithReactQueryClientProps>,
  ) => {
    const queryClient = useQueryClient();

    return <WrappedComponent {...(props as T)} queryClient={queryClient} />;
  };

  ComponentWithReactQueryClient.displayName = `withReactQueryClient(${displayName})`;

  return ComponentWithReactQueryClient;
}
```

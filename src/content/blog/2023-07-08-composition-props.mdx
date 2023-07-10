---
title: Composition vs props in React
description: What is better when you create React component?
pubDate: 2023-07-08T15:27:08Z
slug: 2023/compositon-props-react
---

I recently was adding support for dynamic data (meaning loaded from API) to the design system component. I started as usual - add new props indicating that for example, the `Combobox` component is `loading` or that it has its input value changed so I can hook into that and ask API. I added them to `Combobox` directly so I have more or less those props on the component level:

```tsx
<Combobox loading={true} onInputValueChanged={callAPI} />
```

At first look, it seems like this component is ok - it has all props it needs to work. But can I do better? What about having a new component for this case? So I will have:

```tsx
<Combobox /> // static data

<DynamicCombobox loading={true} onInputValueChanged={callAPI} /> // dynamic data
```

Why it is better? I think mainly because it follows React principle of composition. I can have a base combobox that shares functionality between static and dynamic. Another pro is that in the second case, it is harder to make the impossible state possible. What does it mean? If static `Combobox` does not have a `loading` prop I can't mess with it and set it to `true` when there is no call to API.

There is one more question: how do I share common parts between `Combobox` and `DynamicSelect`? I think there are at least 2 options:

- `BaseCombobox` component - it will have all common parts of combobox: input, list of items to select, etc.
- common functions, CSS classes - it is more granular as you compose your component from small pieces rather than full component

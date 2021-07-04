---
title: Debouncing forms in React with Redux - part two
date: 2018-02-17
permalink: '/blog/2018/debouncing-forms-in-react-part-two/index.html'
---

**Hello! Today I continue with building debounce input in React!. Let's get started.**

## What is debounce

As you saw in a previous blog post my `handleChange` event is firing up every time I type the letter. I don't
want that. I want it to be called when a user stops typing. One way of doing this will be using debounce.

Debounce is limiting a rate which given function will be called. Thanks to that I can tell my app
to run `handleChange` every 250ms. It is very useful when we have event handlers that are attached
to the e.g scroll of change events.

## Debounce in react

I will be using [lodash.debounce](https://www.npmjs.com/package/lodash.debounce) as it is widely used
and battle-tested library.

My `App` component will look like this after a change:

```jsx
class App extends Component {
  constructor() {
    super();
    this.state = { typedWords: [] };

    this.emitChangeDebounced = debounce(this.emitChange, 250);
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
  }

  handleChange = (event) => {
    this.emitChangeDebounced(event.target.value);
  };

  emitChange = (value) => {
    if (value !== '') {
      let typedWords = [...this.state.typedWords, value];
      this.setState({ typedWords });
    }
  };
  // render method here
}
```

Let's start here with `handleChange`. Right now it calls `emitChangeDebounced`. This `emit` is
debounced function that lodash will fire every 250ms after the user changes the input. My main logic lays
inside `emitChange` where I set my state based on a value from the event. You may ask why do you pass
`event.target.value` instead of the whole `event`?

It is because of how React works. In React all events are wrapped into [SyntheticEvent](https://reactjs.org/docs/events.html).
This event is reused by all events inside react. To let garbage collector take it after debounce
has ended I have to either provide only `value` to my function or call `event.persist()` to have my event persisted.

With `event.persist()` my `handleChange` event will look like this:

```jsx
handleChange = (event) => {
  event.persist();
  this.emitChangeDebounced(event);
};
```

If I wanted to pass entire event without `persist` I will get an error:

```js
Warning: This synthetic event is reused for performance reasons. If you're seeing this, you're accessing the property `type` on a released/nullified synthetic event. This is set to null. If you must keep the original synthetic event around, use event.persist().
```

## Testing debounce

Ok, I have my component working but how to test it? This is one of the solutions - in my `App.test.js`
I have the following test:

```jsx
it('should set state when input has changed', () => {
  const wrapper = mount(<App />);
  const searchInputWrapper = wrapper.find('#search');
  searchInputWrapper.simulate('change', {
    target: { value: 'Fake Name' },
  });

  setTimeout(() => {
    expect(wrapper.state().typedWords).toEqual(['Fake Name']);
  }, 200);
});
```

The first few lines are component setup using enzyme. Right after that, I simulate change event on my
search input. Then I use `setTimeout` to wait with the assertion - I will be executed when debounce stops.

That's all for today! Thank you for reading this and thanks to BTM from reactfilux channel for help!

Github repo can be found [here](https://github.com/krzysztofzuraw/blog-projects/tree/master/debounce-input).

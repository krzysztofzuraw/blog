---
title: Debouncing forms in React with Redux
date: 2018-02-10
---

## Basic react form

Before we jump into debouncing and what it means I want to present you a simple react form. It looks
like this:

{% img "2018-02-10-form", "Form", "Form" %}

I made this using awesome [Tailwind CSS](https://tailwindcss.com/). The code for this form sits mainly
in two components - `App.js`:

```jsx
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { typedWords: [] };
  }

  handleChange = (event) => {
    const { value } = event.target;
    let typedWords = [...this.state.typedWords, value];
    this.setState({ typedWords });
  };
  render() {
    return (
      <div className="bg-teal-lighter flex min-h-screen w-full flex-col items-center bg-repeat">
        <div className="container md:mx-auto md:max-w-sm">
          <h1 className="text-grey-darkest mb-6 block w-full text-center">Debounce in React</h1>
          <SearchInput handleChange={this.handleChange} />
        </div>
        {this.state.typedWords.map((word, key) => (
          <SearchResult text={word} key={key} />
        ))}
      </div>
    );
  }
}
```

and `SearchInput`:

```jsx
class SearchInput extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <form className="mb-4" onChange={handleChange}>
        <div className="mb-4 flex flex-col md:w-full">
          <label
            className="text-grey-darkest mb-2 text-lg font-bold uppercase"
            htmlFor="search-input"
          >
            Search input:
          </label>
          <input className="field" name="search" type="text" id="search" />
        </div>
      </form>
    );
  }
}
```

## How it works

In my `App` component I define a `handleChange` function which then will be used inside `SearchInput`
as a callback. In `handleChange`, I extract typed character from html input. Then I make a copy of state
and insert a new value from `SearchInput` component.

`SearchInput` is representing html form so I treat it as a representational component.

You may notice another component - `SearchResult` which looks like this:

```jsx
function SearchResult(props) {
  const { text } = props;
  return (
    <div className="container md:mx-auto md:max-w-sm">
      <span>{text}</span>
    </div>
  );
}
```

it is still only representing html.

**Whoa! What is happening here?**

`onChange` event handler fired up every time I typed something into an
input. That's not exactly what I wanted - I want my handler to capture only full typed words. How to
do it?

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
    if (value !== "") {
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
it("should set state when input has changed", () => {
  const wrapper = mount(<App />);
  const searchInputWrapper = wrapper.find("#search");
  searchInputWrapper.simulate("change", {
    target: { value: "Fake Name" },
  });

  setTimeout(() => {
    expect(wrapper.state().typedWords).toEqual(["Fake Name"]);
  }, 200);
});
```

The first few lines are component setup using enzyme. Right after that, I simulate change event on my
search input. Then I use `setTimeout` to wait with the assertion - I will be executed when debounce stops.

## Adding redux

It may seem like overkill for this simple example but I decided to add [redux](https://github.com/reactjs/redux)
to show how this debounced form can be used in the more realistic scenario.

So, after adding `redux` and `react-redux` to my application I started by creating actions & actions
creators under `src/actions/index.js`:

```js
export const ADD_WORD = "ADD_WORD";

export const addWord = (word) => ({
  type: ADD_WORD,
  word,
});
```

To explain how those two can be used I added a small test in 'actions.test.js`:

```js
import { ADD_WORD, addWord } from "./index";

describe("Actions", () => {
  it("should create action to add word", () => {
    const expectedAction = {
      type: ADD_WORD,
      word: "fake",
    };

    expect(addWord("fake")).toEqual(expectedAction);
  });
});
```

As you can see calling `addWord` with some string should dispatch action with `ADD_WORD` type and typed
a word.

Next step was to add `src/reducers/index.js`:

```js
import { combineReducers } from "redux";

import { ADD_WORD } from "../actions/index";

export const words = (state = [], action) => {
  switch (action.type) {
    case ADD_WORD:
      return [action.word, ...state];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ words });
export default rootReducer;
```

Where I have my pure function `words` which is getting its own piece of state to work with. In this
case, I want my typed words to be first in a state of my application. I also added tests:

```js
import { words } from "./index";
import { ADD_WORD } from "../actions/index";

describe("Words reducer", () => {
  it("should return initial state", () => {
    expect(words(undefined, {})).toEqual([]);
  });

  it("should handle ADD_WORD on initial state", () => {
    expect(words([], { type: ADD_WORD, word: "tom" })).toEqual(["tom"]);
  });

  it("should handle ADD_WORD on existing state", () => {
    expect(words(["tim"], { type: ADD_WORD, word: "tom" })).toEqual(["tom", "tim"]);
  });
});
```

The last thing is to set up my store and connect it with react application. The first step is happening in
`store.js`:

```js
import { createStore, compose } from "redux";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);

export default store;
```

I create here my store with `rootReducer` which in this case is only `words` reducer and I also
added [redux dev tools](https://github.com/gaearon/redux-devtools) which help me debug my redux code.

The second step is to modify my `index.js` so redux can be injected into my application:

```js
import { Provider } from "react-redux";
import AppContainer from "./components/App/AppContainer";
import store from "./store";

const root = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
ReactDOM.render(root, document.getElementById("root"));
```

## Using redux with react applications

You may notice that `Provider` component is wrapping a new one - `AppContainer`. This is a nice pattern
to use when using redux & react applications. It boils down to two concepts: _component_ and _container_.
A component is responsible only for rendering html. A container is a way to get your data from the redux store.

That's why I created `AppContainer`:

```js
import React from "react";
import { connect } from "react-redux";

import { addWord } from "../../actions/index";

import App from "./App";

export const AppContainer = (props) => <App addWord={props.addWord} words={props.words} />;

const mapDispatchToProps = (dispatch) => ({
  addWord: (word) => dispatch(addWord(word)),
});

const mapStateToProps = (state) => ({
  words: state.words,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
```

Here I added two typical functions for react applications with redux - `mapDispatchToProps` &
`mapStateToProps`. In the first one, I tell redux that when I call `addWord` inside my `App` component
it should dispatch an action from `actions/index`. The second function is for extracting the data from
the store - it will be the best if my component has only access to this part of a state which it is
concerned about.

That's all for today! To recap: I've added redux to my application and used [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) and I have my debounced input with react & redux!

Github repo can be found [here](https://github.com/krzysztofzuraw/blog-projects/tree/master/debounce-input).

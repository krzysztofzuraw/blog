---
title: Debouncing forms in React with Redux - part three
date: '2018-02-25T09:12:03.284Z'
slug: '/blog/2018/debouncing-forms-in-react-part-three'
tags:
  - javascript
  - react
  - redux
  - debounce
---

**Hi! Welcome to the last part of blog series about debouncing forms in React. Today I want to show you
how can you add redux to your debounced component.**

## Adding redux

It may seem like overkill for this simple example but I decided to add [redux](https://github.com/reactjs/redux)
to show how this debounced form can be used in the more realistic scenario.

So, after adding `redux` and `react-redux` to my application I started by creating actions & actions
creators under `src/actions/index.js`:

```js
export const ADD_WORD = 'ADD_WORD';

export const addWord = (word) => ({
  type: ADD_WORD,
  word,
});
```

To explain how those two can be used I added a small test in 'actions.test.js`:

```js
import { ADD_WORD, addWord } from './index';

describe('Actions', () => {
  it('should create action to add word', () => {
    const expectedAction = {
      type: ADD_WORD,
      word: 'fake',
    };

    expect(addWord('fake')).toEqual(expectedAction);
  });
});
```

As you can see calling `addWord` with some string should dispatch action with `ADD_WORD` type and typed
a word.

Next step was to add `src/reducers/index.js`:

```js
import { combineReducers } from 'redux';

import { ADD_WORD } from '../actions/index';

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
import { words } from './index';
import { ADD_WORD } from '../actions/index';

describe('Words reducer', () => {
  it('should return initial state', () => {
    expect(words(undefined, {})).toEqual([]);
  });

  it('should handle ADD_WORD on initial state', () => {
    expect(words([], { type: ADD_WORD, word: 'tom' })).toEqual(['tom']);
  });

  it('should handle ADD_WORD on existing state', () => {
    expect(words(['tim'], { type: ADD_WORD, word: 'tom' })).toEqual(['tom', 'tim']);
  });
});
```

The last thing is to set up my store and connect it with react application. The first step is happening in
`store.js`:

```js
import { createStore, compose } from 'redux';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f)
);

export default store;
```

I create here my store with `rootReducer` which in this case is just only `words` reducer and I also
added [redux dev tools](https://github.com/gaearon/redux-devtools) which help me debug my redux code.

The second step is to modify my `index.js` so redux can be injected into my application:

```js
import { Provider } from 'react-redux';
import AppContainer from './components/App/AppContainer';
import store from './store';

const root = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
ReactDOM.render(root, document.getElementById('root'));
```

## Using redux with react applications

You may notice that `Provider` component is wrapping a new one - `AppContainer`. This is a nice pattern
to use when using redux & react applications. It boils down to two concepts: _component_ and _container_.
A component is responsible only for rendering html. A container is a way to get your data from the redux store.

That's why I created `AppContainer`:

```js
import React from 'react';
import { connect } from 'react-redux';

import { addWord } from '../../actions/index';

import App from './App';

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

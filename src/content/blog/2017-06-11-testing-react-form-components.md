---
title: Testing React form components
pubDate: 2017-06-11
slug: 2017/testing-react-form-components
---

**In this blog post, I will present quick code snippets on how to test
your React component. Especially the one that renders the form.**

My history with writing React application starts from an excellent
course by [Wes Bos](https://reactforbeginners.com/). So I completed this
course and with bright future ahead of me I start to create my first own
React based project.

I decided that I will create simple podcast search and player. So I
created this two components:

`App`:

```jsx
class App extends Component {
  constructor() {
    super();
    this.addPodcast = this.addPodcast.bind(this);
  }

  state = {
    podcasts: {},
  };

  addPodcast(podcast) {
    const podcasts = { ...this.state.podcasts };
    const timestamp = Date.now();
    podcasts[`podcast-${timestamp}`] = podcast;
    this.setState({ podcasts });
  }

  render() {
    return (
      <div className="App">
        <SearchPodcastForm addPodcast={this.addPodcast} />
      </div>
    );
  }
}
```

`SearchPodcastForm`:

```jsx
class SearchPodcastForm extends Component {
  searchForPodcast(event) {
    event.preventDefault();
    const podcastTitle = this.refs.title.value;
    axios
      .get(
        `https://gpodder.net/search.json?q=${encodeURIComponent(podcastTitle)}`,
      )
      .then((response) => {
        response.data.map((podcast) => this.props.addPodcast(podcast));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <form
        className="podcast-search"
        onSubmit={(e) => this.searchForPodcast(e)}
      >
        <input ref="title" type="text" placeholder="Type name of podcast" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
```

And here comes the question: how do I test these two components? I'm
using
[create-app-react](https://github.com/facebookincubator/create-react-app)
so I already have [jest](https://facebook.github.io/jest/).

Ok, I can start from this. So I create my `SearchPodcastForm.test.jsx`.
But that is not everything! To ease a little a bit testing I used two
libraries more: [enzyme](https://github.com/airbnb/enzyme) and
[sinon](http://sinonjs.org/). Why? as jest tests are executed inside
node environment so I need a way to create React components - for that I
used `enzyme`. It can be done this way:

```jsx
import { mount } from "enzyme";
const addPodcastMock = jest.fn();
const component = mount(<SearchPodcastForm addPodcast={addPodcastMock} />);
```

Why `mount`? To submit a form I need first to mount my component. As it
is mounted I can submit it via:

```jsx
component.find("form").simulate("submit", { preventDefault: jest.fn() });
```

The code above should be self-explanatory but interesting is that I
passed `{ preventDefault: jest.fn() }`. It is jest mock object which is
then passed to my `searchForPodcast` as an event argument.

This works fine but next line in `searchForPodcast` require that
`this.refs` will be present so I had to set them up in a test:

```jsx
component.find("input").node.value = "This American Life";
```

The last thing to mock within this method is a call to external service.
How to do that? By using `sinon`:

```jsx
import sinon from "sinon";

const resolved = new Promise((r) =>
  r({ data: Array.from([{ 0: { description: "desc" } }]) }),
);
sinon.stub(axios, "get").returns(resolved);
```

Everything works fine until I try to check if my `addPodcastMock` from
mounting snippet has been called. I add these lines:

```jsx
expect(addPodcastMock.mock.calls.length).toBe(1);
expect(addPodcastMock.mock.calls[0]).toEqual([{ 0: { description: "desc" } }]);
```

And I got a failure. I try to debug it a little bit more and what I
found out that these lines are called before even enzyme mounts a
component. To allow my test to pass I had to execute mounting and
mocking before all tests:

```jsx
beforeAll(() => {
  const resolved = new Promise((r) =>
    r({ data: Array.from([{ 0: { description: "desc" } }]) }),
  );
  sinon.stub(axios, "get").returns(resolved);
  component.find("input").node.value = "This American Life";
  component.find("form").simulate("submit", { preventDefault: jest.fn() });
});
```

Maybe you dear reader will know why and how to avoid executing
`beforeAll`?

Going back to tests I wrote this small test by using `test` word, you
can use `describe` as an indication of large test suite too:

```jsx
test("submitting form calls addPodcast", () => {
  expect(addPodcastMock.mock.calls.length).toBe(1);
  expect(addPodcastMock.mock.calls[0]).toEqual([
    { 0: { description: "desc" } },
  ]);
});
```

The last test I got (right now) is for my `addPodcast` method inside
`App` component:

```jsx
import React from "react";
import { mount } from "enzyme";

import App from "../components/App";

test("calling addPodcast should change the state", () => {
  const component = mount(<App />);
  component.instance().addPodcast({ 0: { description: "desc" } });
  expect(Object.keys(component.state("podcasts")).length).toBe(1);
});
```

That's all for today! Feel free to comment: if you have any better way
of writing react form components test - please tell me or maybe I did
something totally wrong here?

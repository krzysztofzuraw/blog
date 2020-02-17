---
title: Lessons learned from writing pet project in React with Redux
date: "2018-04-21T10:12:03.284Z"
slug: "/blog/2018/lessons-learned-from-react-app.html"
tags:
    - javascript
    - react
    - redux
---

**Today I wanted to write about lessons that I've learned during working on my pet project. Let's get started!**

When I decided to learn React and Redux I wanted to learn them by doing some project. I created an app
called [photogram](https://photogram-kz.herokuapp.com/) which is kind of a mix between [unsplash](https://unsplash.com/) and [instagram](https://www.instagram.com/?hl=en). The user can comment and
give likes to every photo. This is basic functionality that I wanted my project to have.

It took me about ~4 months to get this project done. Bellow are some lessons that I've learned along the way.

## Lessons learned

As I used [redux](https://redux.js.org/) to manage my state I have to dispatch async actions. For this purpose, I've used
[redux-thunk](https://github.com/gaearon/redux-thunk) as it was the most straightforward way to do this. I have to say that for small use
cases it is very good - and my use case was small. Let say I wanted my application to show a message to the
user when fetching of photos was completed. I could do this using thunks but they started to get little
messy as I wanted more and more side effects. Based on my experience from work I found out that using
RxJs epics in much easier for such problems.

What I really like about redux is testability of my action creators and reducers. As they are pure
functions it's really easy to mock needed parameters that function is taking and test it:

```jsx
// reducer
export const photos = (state = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return [...state, ...action.photos];
    default:
      return state;
  }
};

// test
it("should handle FETCH_PHOTOS_SUCCESS on existing state", () => {
    expect(
      reducers.photos([{ id: "1" }], {
        type: actions.FETCH_PHOTOS_SUCCESS,
        photos: [{ id: "2" }]
      })
    ).toEqual([{ id: "1" }, { id: "2" }]);
  });
});
```

To connect your components to a redux store I've used containers and components pattern. It proves to be
very effective especially as I was able to test my component if it is displaying information properly and
if my container has needed logic to display container.

At first, I wanted to use [Semantic UI React](https://react.semantic-ui.com/) for my visual layer but I found that I do not need all these semantic components as my application is small and I felt a little bit overhead with all those options of sematic ui. I've used my own html components and I've added a style for them. I take me a little bit more than if I would use semantic ui.

To test my application I've used [enzyme](https://github.com/airbnb/enzyme) and I was surprised that I cannot easily test if I'm
dispatching an action on button click. I've found a couple of open github issues to address that
but I haven't had luck with playing with enzyme. To test next react application I will try to use
[react-testing-library](https://github.com/kentcdodds/react-testing-library).

### Summary

During the development of my application, I've learned quite a few things which most of them I wrote
here. What did you learn during your pet projects with React? Please write.

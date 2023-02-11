---
title: Fragments and queries in Relay Modern
pubDate: 2017-12-09
slug: 2017/fragments-and-queries-in-relay-modern
---

**Today I want to cover two points: how to use fragments in relay modern and one of the ways of handling
routing and relay. Let's get started!**

## Fragments

From a previous blog post I have my main page with all films titles. Right now I want to make sure that
data I want to fetch is defined in my component. What does it mean? Previously I had a query:

```js
const AppQuery = graphql`
  query AppQuery {
    films {
      id
      title
    }
  }
`;
```

Which then was used in `App.jsx`:

```jsx
<QueryRenderer query={AppQuery} />
```

But I want to fetch title of my films in `FilmList` component. To do that I will use a feature called
[fragments](https://facebook.github.io/relay/docs/en/fragment-container.html). First I will have my
`AppQuery`:

```js
const AppQuery = graphql`
  query AppQuery {
    films {
      ...FilmList_films
    }
  }
`;
```

This `...` indicates that I'm working here with fragments. In my `FilmList` component now I can write:

```jsx
class FilmList extends React.Component {
  render() {
    // some render method
    );
  }
}

export default createFragmentContainer(FilmList, {
  films: graphql`
    fragment FilmList_films on Film @relay(plural: true) {
      id
      title
    }
  `
});
```

The naming of the fragment is important: first comes a name of a component then after `_` prop name to be injected.
I also need indication `@relay(plural: true)` that this fragment will return multiple values.

What are benefits of such approach? I do not need to get all data in the beginning - I fetch it when
I need.

## Fragments and routing

In above example, I have my `FilmList` component which has inside link to one instance of given film.
How can I create a fragment to get only for this one film? I tried fragment approach with `react-router-dom`
but I have no luck. Relay [docs](https://facebook.github.io/relay/docs/en/routing.html) explain that
I can't expect routing to be provided by Relay.

What I do instead (and in such simple case is recommended)
I added my own `QueryRenderer` which renders `Film` representational component. My relay queries are
defined inside `FilmContainer`:

```jsx
const FilmQuery = graphql`
  query FilmContainerQuery($filmID: ID!) {
    film(id: $filmID) {
      airDate
      title
      rating
      actors {
        id
        firstName
        lastName
      }
    }
  }
`;

export default class FilmContainer extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={FilmQuery}
        variables={{
          filmID: this.props.match.params.filmId,
        }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <Film film={props.film} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
```

In my query, I want to have data only for a particular film so I pass its id as a variable from
`react-router-dom` match. The rest is exactly the same as in `AppQuery`.

That's all for today! I hope this post was valuable - if you have any other patterns for React & Relay
please let me know! The last thing in your application is to get mutations working which I will take
care in the next blog post.

Repo with code can be found on
[github](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_django_graphql_react_relay).

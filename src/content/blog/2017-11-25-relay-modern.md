---
title: Setting up Relay Modern on frontend
pubDate: 2017-11-25
slug: 2017/setting-up-relay-modern-on-frontend
---

**Hello, for such long break I'm back to the Django, React & Relay tutorial! Today I will show you
how to setup Relay on the frontend to work with Django. Let's get started!**

## Preparing Django

### Schema

First thing is to somehow tell Relay what is the structure of data in the backend. It is done via schema.
The schema describes all the queries, mutations and data structures of GraphQL application. To generate one
I add following line to `Makefile`:

```makefile
.PHONY: generate-schema
generate-schema:
	docker-compose run film_api python manage.py graphql_schema --indent 2
	mv film_api/schema.json film_ui/schema.json
```

I'm using here command (`graphql_schema`) provided by django graphene. Indent option in for a
sake of better readability of generated schema which looks like:

```json
{
  "data": {
    "__schema": {
      "queryType": {
        "name": "Query"
      },
      "mutationType": {
        "name": "Mutation"
      },
      "subscriptionType": null,
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "description": null,
          "fields": [
            {
              "name": "actor",
              "description": "The ID of the object",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
    # rest of the schema
```

### CORS

As I got schema, next thing is to allow Relay to connect to Django GraphQL backend. For this, I need
to setup [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). It allows request coming
from `127.0.0.1:3000` (which I will be serving my ui app in dev mode) to be received by Django.

Adding CORS to django is simple. First I have to install a package called [django-cors-headers](https://github.com/OttoYiu/django-cors-headers).
Then I setup it as instructions from their [tutorial goes](https://github.com/OttoYiu/django-cors-headers#setup).
One custom thing I add was `CORS_ORIGIN_WHITELIST` setting which I set as:

```python
CORS_ORIGIN_WHITELIST = ('localhost:3000', '127.0.0.1:3000')
```

This is all for Django part - next comes JavaScript part

## Preparing UI App

### Relay dev dependencies

As I'm using [create-react-app](https://github.com/facebookincubator/create-react-app) I have the whole
configuration done for me but to use Relay I need to [eject](https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup).
It's simple as running: `npm run eject`. As I got my whole configuration done I need to install a couple
of relay packages:

```bash
npm install --save react-relay
npm install --save -dev babel-plugin-relay relay-compiler
```

Let's look first how to setup dev dependencies. To allow relay generate and execute schema I needed
to add babel plugin & present to babel config in `package.json` (order is important here):

```json
"babel": {
    "plugins": ["relay"],
    "presets": ["react-app"]
  },
```

Then I added following script to the `package.json`:

```json
"relay": "relay-compiler --src ./src/components/ --schema ./schema.json --extensions jsx"
```

It tells the compiler to generate files that will be used then by Relay to make queries. Important here
are `schema` flag which points to schema location and `extensions` as by default relay compiler
recognizes only `.js` files.

### Setting up Relay

I have my dev dependencies done - right now I can setup Relay! First I need `Environment.js`:

```js
import { Environment, Network, RecordSource, Store } from "relay-runtime";

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch("http://127.0.0.1:8000/graphql/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
});

const environment = new Environment({
  network,
  store,
});

export default environment;
```

Going from the top - I create a store for my Relay data, then I create a `network` where I submit
the address of `graphql` instance - In my case where Django Graphene listens to. The rest of the code in
`network` function is JSON handling. At the end of the file I export `environment` so I can use
it in my `App.jsx`:

```jsx
import { QueryRenderer, graphql } from "react-relay";
import environment from "../Environment";

const FilmListQuery = graphql`
  query AppQuery {
    films {
      id
      title
    }
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={FilmListQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <FilmList films={props.films} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default App;
```

What is happening here? `FilmListQuery` is the simplest query of all - I fetch the id and title
of the film - I can take this string and execute in on `127.0.0.1:8000/graphql` and the result will
be a list of films with title and ids. In `QueryRenderer` component I specify the previously created
`environment`, `query` and handling of errors. If there is no error and I got a data I render `FilmList`.

I've got a basic version of my application! I can right now get data from Django using Relay! That's
all for today and stay tuned for next part!

Repo with code can be found on
[github](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_django_graphql_react_relay).

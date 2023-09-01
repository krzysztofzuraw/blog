---
title: Mutations in Relay Modern
pubDate: 2018-01-06
slug: 2018/mutations-in-relay-modern
---

**In this series, I covered various topics starting from setting up Django and ending in Relay queries.
There is only one topic to be covered - mutations. And today I want to tell you how to implement
them.**

## What is mutation

You can think of mutation of a request that changes data. In REST terms it will be `POST`, `PUT`
or `DELETE`. In addition to this in Relay you can request your data back - It means that to display
newly created entity you don't need an additional query.

Mutation looks as follows:

```js
mutation CreateFilmMutation($input: CreateFilmInput!) {
    createFilm(input: $input) {
      film {
        id
        title
        rating
        airDate
        actors {
          firstName
          lastName
        }
      }
    }
  }
```

In such case, I provide inputs to mutation. For film it will be a title, air date and rating. In
definition I also add a query for getting created data back.

## How to implement mutation

As I got simple mutation definition it's time to implement it. First I need to create a way to execute
my mutation. I decided to have a form where a user can fill title, air date and rating. When she or he
submits - I will execute mutation. It looks as follows:

```jsx
export default class AddFilmForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      pubDate: "",
      rating: 0,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value =
      target.type === "select-one" ? parseInt(target.value, 10) : target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    CreateFilmMutation(this.state.title, this.state.date, this.state.rating);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Enter details of new film</ControlLabel>
          <FormControl
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Enter details of new film</ControlLabel>
          <FormControl
            type="date"
            name="date"
            value={this.state.date}
            placeholder="Air date"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup onChange={this.handleChange}>
          <ControlLabel>Select rating</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="select"
            name="rating"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </FormControl>
        </FormGroup>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

As you can see this is a normal implementation of how to handle forms in React. I catch `onChange`
events in `handleChange` then get value character by character and store in the component state.
At the end when user clicks submit I fire up `CreateFilmMutation` inside `handleSubmit`.

How is this mutation implemented? Look below:

```jsx
import { commitMutation, graphql } from "react-relay";
import environment from "../Environment";

const mutation = graphql`
  mutation CreateFilmMutation($input: CreateFilmInput!) {
    createFilm(input: $input) {
      film {
        id
        title
        rating
        airDate
        actors {
          firstName
          lastName
        }
      }
    }
  }
`;

export default function CreateFilmMutation(title, airDate, rating) {
  const variables = {
    input: {
      title,
      airDate,
      rating,
      actors: [{ actorId: "QWN0b3I6MQ==" }],
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log("Response received from server.");
    },
    onError: (err) => console.error(err),
  });
}
```

At the top, I have my mutation syntax which then will be executed at the graphql endpoint. In my
`variables` definition I hardcode `actors` which can be changed by tweaking a little bit form.

As you can see a mutation in executed in `commitMutation` with two callbacks: one for completing
mutation and the second one when mutation end with an error. This is a useful place to show for example
errors to the user or some confirmation.

That's all! I have my mutation working. Thank you for reading that and if you like it please share
it on interwebs.

Repo with code can be found on
[Github](https://github.com/krzysztofzuraw/personal-blog-projects/tree/master/blog_django_graphql_react_relay).

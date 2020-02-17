---
title: Debouncing forms in React with Redux - part one
date: "2018-02-10T10:12:03.284Z"
slug: "/blog/2018/debouncing-forms-in-react-part-one.html"
tags:
    - javascript
    - react
    - redux
    - debounce
readNext: '/blog/2018/debouncing-forms-in-react-part-two.html'
---

**Hi! Today I want to start a new blog post series. This one will be all about debouncing react forms.
Let's get started!**

## Basic react form

Before we jump into debouncing and what it means I want to present you a simple react form. It looks
like this:

![image](./form.png)

I made this using awesome [Tailwind CSS](https://tailwindcss.com/). The code for this form sits mainly
in two components - `App.js`:

```jsx
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { typedWords: [] }
  }

  handleChange = event => {
    const { value } = event.target
    let typedWords = [...this.state.typedWords, value]
    this.setState({ typedWords })
  }
  render() {
    return (
      <div className="flex flex-col items-center min-h-screen w-full bg-teal-lighter bg-repeat">
        <div className="container md:max-w-sm md:mx-auto">
          <h1 className="block w-full text-center text-grey-darkest mb-6">
            Debounce in React
          </h1>
          <SearchInput handleChange={this.handleChange} />
        </div>
        {this.state.typedWords.map((word, key) => (
          <SearchResult text={word} key={key} />
        ))}
      </div>
    )
  }
}
```

and `SearchInput`:

```jsx
class SearchInput extends Component {
  render() {
    const { handleChange } = this.props
    return (
      <form className="mb-4" onChange={handleChange}>
        <div className="flex flex-col mb-4 md:w-full">
          <label
            className="mb-2 uppercase font-bold text-lg text-grey-darkest"
            htmlFor="search-input"
          >
            Search input:
          </label>
          <input className="field" name="search" type="text" id="search" />
        </div>
      </form>
    )
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
  const { text } = props
  return (
    <div className="container md:max-w-sm md:mx-auto">
      <span>{text}</span>
    </div>
  )
}
```

it is still only representing html.

I have my components working so let's type something into a search input:

<iframe src="https://player.vimeo.com/video/255154770" width="640" height="836" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/255154770">Form without debouncing</a> from <a href="https://vimeo.com/user12996532">Noaal</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

**Whoa! What is happening here?**

`onChange` event handler fired up every time I typed something into an
input. That's not exactly what I wanted - I want my handler to capture only full typed words. How to
do it?

By using _debouncing_ - which I will explain in next blog post! Stay tuned and thanks for reading.

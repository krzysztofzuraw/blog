import * as React from 'react';

import '../styles/styles.css';

const IndexPage: React.FunctionComponent = () => {
  return (
    <div className="wrapper">
      <nav>
        <h1>Krzysztof Żuraw personal site 🏗️</h1>
        <ul>
          <li>
            <a href="#">
              <h2>Home 🏠</h2>
            </a>
          </li>
          <li>
            <a href="#">
              <h2>Blog ✍️</h2>
            </a>
          </li>
          <li>
            <a href="#">
              <h2>Now 📆</h2>
            </a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h3>Hello 👋🏻</h3>
        <p>
          Welcome to my personal site. I'm self-taught frontend developer. I enjoy working with
          TypeScript, React, Redux and RxJs. Previously I was working with Python (mainly Django
          framework). You can find my projects on <a href="">github</a> and tools on{' '}
          <a href="">uses</a> page. I have LinkedIn <a href="">too</a>.
        </p>
        <p>
          If I'm not coding I like to brew good coffee with Chemex or Areopress. You can find me
          also in various food spots (tasty ones) around Wrocław. I also like giving back to
          community so I was a few times mentor on Django Girls (Wrocław & Kraków). I used to teach
          Python at Code Geeks Carrots Wrocław.
        </p>
        <p>
          I like to organize things. I'm coorganizer of <a href="">Wrocław TypeScript meetup</a>.
          I'm helping to organize <a href="">Django Girls Wrocław</a>. If you need a place & help
          with organizing do not hesitate to contact me (email is on the footer).
        </p>
        <p>
          You can find what I'm doing now at <a href="">now</a> page.
        </p>
      </div>
      <footer>
        <div>
          © 2016-{new Date().getFullYear()}&nbsp;<a href="">Krzysztof Żuraw</a>. Built with Gatsby.
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;

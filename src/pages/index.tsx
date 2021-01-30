import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO } from '../components';

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        Hello{' '}
        <span role="img" aria-label="wave">
          👋🏻
        </span>
      </h1>
      <p>
        My name is Krzysztof Żuraw. I'm self-taught frontend developer. I enjoy working with
        TypeScript + React.
      </p>
      <p>
        If I'm not coding I like to brew some good coffee with Chemex or Aeropress. You can also
        find me in various food spots (tasty ones) around Wrocław. I also like giving back to
        community so a few times I was a mentor on Django Girls (Wrocław & Kraków) and used to teach
        Python at Code Geeks Carrots Wrocław (where I met my lovely girlfriend).
      </p>
      <p>
        I like to organize things. I'm coorganizer of{' '}
        <Link to="https://www.meetup.com/pl-PL/WrocTypeScript/">Wrocław TypeScript meetup</Link>.
        I'm helping in coordination of{' '}
        <Link to="https://djangogirls.org/wroclaw/">Django Girls Wrocław</Link>. If you need a place
        & help with preparing some event do not hesitate to contact me (email is on the footer).
      </p>
      <p>Where can you go from here?</p>
      <ul>
        <li>
          Read <Link to="/blog">blog posts</Link> that I've written
        </li>
        <li>
          Read what tools & systems I'm <Link to="/uses">using</Link>
        </li>
        <li>
          Read what I'm doing <Link to="/now">now</Link>
        </li>
        <li>
          Subscribe to <Link to="/rss">RSS</Link> feed of my blog
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;

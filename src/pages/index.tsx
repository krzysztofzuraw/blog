import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO } from '../components';

const Index: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Home" slug="" />
      <article>
        <h1>
          Hi, I'm Krzysztof Żuraw{' '}
          <span role="img" aria-label="wave-emoji">
            👋🏻
          </span>
        </h1>
        <p>Welcome to my personal page. A few words about me:</p>
        <ul>
          <li>self taught frontend developer with 5+ years of experience</li>
          <li>specialise in building React &amp; TypeScript websites/web-apps</li>
          <li>
            leading one of the dev teams at <Link to="https://www.ingrid.com/">Ingrid</Link>
          </li>
          <li>learning about CSS &amp; design</li>
          <li>brewing speciality coffee using Chemex</li>
        </ul>

        <p>I’m currently living in Wrocław but I’m open to working remotely or relocating.</p>

        <p>
          I like giving back to community by being a mentor of{' '}
          <Link to="https://djangogirls.org/">Django Girls</Link> or{' '}
          <Link to="https://gocarrots.org/">Geek Girls Carrots</Link>. I like to organise events -
          I’m co-organizer of{' '}
          <Link to="https://www.meetup.com/pl-PL/WrocTypeScript/">Wrocław TypeScript meetup</Link>{' '}
          and <Link to="https://djangogirls.org/wroclaw/">Django Girls Wrocław</Link>. If you need
          help with preparing tech event do not hesitate to contact me.
        </p>
      </article>
    </Layout>
  );
};

export default Index;

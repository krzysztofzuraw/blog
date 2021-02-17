import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO } from '../components';

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="prose lg:prose-xl">
        <h1>Hello, I'm Krzysztof Żuraw</h1>
        <p>
          Welcome to my site{' '}
          <span role="img" aria-label="wave">
            👋🏻
          </span>{' '}
          . Quick introduction:
        </p>
        <ul>
          <li>self taught frontend developer with 5+ years of experience</li>
          <li>specialise in building React &amp; TypeScript websites/web-apps</li>
          <li>
            leading one of the dev teams at <Link to="https://www.ingrid.com/">Ingrid</Link>
          </li>
          <li>learning about CSS &amp; design</li>
          <li>brewing speciality coffee using Chemex</li>
        </ul>
        <p>Where can you go from here?</p>
        <ul>
          <li>
            read <Link to="/blog">blog posts</Link>
          </li>
          <li>
            read what tools I'm <Link to="/uses">using</Link>
          </li>
          <li>
            read what I'm doing <Link to="/now">now</Link>
          </li>
          <li>
            subscribe to <Link to="/feeds/all.rss.xml">RSS</Link> feed of my blog
          </li>
          <li>
            find me on <Link to="https://github.com/krzysztofzuraw">GitHub</Link>/
            <Link to="https://twitter.com/krzysztof_zuraw">Twitter</Link>/
            <Link to="https://pl.linkedin.com/in/krzysztofzuraw">LinkedIn</Link>
          </li>
        </ul>

        <p>
          If you still reading this page - let me tell you more about me. I’m currently living in
          Wrocław but I’m open to working remotely or relocating.
        </p>
        <p>
          I like giving back to community by being a mentor of{' '}
          <Link to="https://djangogirls.org">Django Girls</Link> or{' '}
          <Link to="https://gocarrots.org/">Geek Girls Carrots</Link>. I like to organise events -
          I’m co-organizer of{' '}
          <Link to="https://www.meetup.com/pl-PL/WrocTypeScript/">Wrocław TypeScript</Link> meetup
          and <Link to="https://djangogirls.org/wroclaw/">Django Girls Wrocław</Link>. If you need
          help with preparing tech event do not hesitate to contact me.
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;

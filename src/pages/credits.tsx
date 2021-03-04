import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO } from '../components';

const Credits: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Credits" />
      <article className="flow">
        <h1>Credits</h1>
        <ul>
          <li>
            JS framework - <Link to="https://www.gatsbyjs.com/">Gatsby.js</Link>
          </li>
          <li>
            CSS framework - <Link to="https://tailwindcss.com/">Tailwind.css</Link>
          </li>
        </ul>
      </article>
    </Layout>
  );
};

export default Credits;

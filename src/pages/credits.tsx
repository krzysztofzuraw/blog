import React, { FunctionComponent } from 'react';
import { Layout, SEO, Link } from '../components';

const CreditsPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Credits" />
      <h1>Credits</h1>
      <ul>
        <li>
          Main font -{' '}
          <Link to="https://ia.net/writer/blog/a-typographic-christmas">iA Writer Quattro</Link>
        </li>
        <li>
          Monospaced font - <Link to="https://www.jetbrains.com/lp/mono/">JetBrainsMono</Link>
        </li>
        <li>
          Site is build used <Link to="https://www.gatsbyjs.com/">Gatsby.js</Link>
        </li>
        <li>Code snippets used Default Dark+ theme from VS Code</li>
      </ul>
    </Layout>
  );
};

export default CreditsPage;

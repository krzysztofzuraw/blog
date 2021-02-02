import React, { FunctionComponent } from 'react';
import { Layout, SEO, Link } from '../components';

const NowPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Now" />
      <h1>What I'm doing now</h1>
      <ul>
        <li>Taking break from social media</li>
        <li>Recovering from RSI in my right hand</li>
        <li>Reading books & magazines</li>
        <li>
          Working at <Link to="https://ingrid.com">Ingrid</Link>
        </li>
        <li>Working on this website</li>
      </ul>
      <time>Last updated on 2020-02-01</time>
    </Layout>
  );
};

export default NowPage;

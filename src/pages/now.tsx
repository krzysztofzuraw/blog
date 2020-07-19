import * as React from 'react';
import { Layout, SEO } from '../components';

const NowPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Now | Krzysztof Żuraw" description="What I'm doing now" slug="/now" />
      <ul>
        <li>Living in Wrocław</li>
        <li>Started running - again.</li>
        <li>Started doing some experiments on CodePen.</li>
        <li>Moved to plain text for wiki & todos</li>
      </ul>
      <p>Last updated - 2020-07-19</p>
    </Layout>
  );
};

export default NowPage;

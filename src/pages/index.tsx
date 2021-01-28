import React, { FunctionComponent } from 'react';
import { Layout, SEO } from '../components';

const IndexPage: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <p>OMG</p>
    </Layout>
  );
};

export default IndexPage;

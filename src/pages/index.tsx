import React, { FunctionComponent } from 'react';
import { Layout, SEO, Stack } from '../components';

const IndexPage: FunctionComponent = () => {
  return (
    <Layout location="home">
      <SEO title="Home" />
      <Stack>
        <h1>Welcome, I'm Krzysztof Żuraw 👋🏻</h1>
        <h2>Frontend Developer living in Wrocław</h2>
      </Stack>
    </Layout>
  );
};

export default IndexPage;

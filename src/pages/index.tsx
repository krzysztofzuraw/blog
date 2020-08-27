import React, { FunctionComponent } from 'react';
import { Layout, Stack } from '../components';

const IndexPage: FunctionComponent = () => {
  return (
    <Layout location="home">
      <Stack>
        <h1>Welcome, I'm Krzysztof Żuraw 👋🏻</h1>
        <h2>Frontend Developer living in Wrocław</h2>
      </Stack>
    </Layout>
  );
};

export default IndexPage;

import React, { FunctionComponent } from 'react';
import { Layout, Stack } from '../components';

const IndexPage: FunctionComponent = () => {
  return (
    <Layout location="now">
      <Stack>
        <h1>What I'm doing now</h1>
        <p>
          I'm talking a break from social media - especially twitter. Too much following of other
          people lifes. Going back to running and more exercising.
        </p>
        <p>
          Last updated <time>August 28, 2020</time>
        </p>
      </Stack>
    </Layout>
  );
};

export default IndexPage;

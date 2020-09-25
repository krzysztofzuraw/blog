import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO, Stack } from '../components';

const UsesPage: FunctionComponent = () => {
  return (
    <Layout location="uses">
      <SEO title="Uses" />
      <Stack>
        <h1>Tools that I'm using</h1>
        <p>
          I spend too much time luring through other people tooling and too little time spend on
          doing actual work. So I decided to have my <Link to="https://uses.tech/">uses page</Link>{' '}
          a little bit different.
        </p>
        <p>
          I use <Link to="https://code.visualstudio.com/Download">code editor</Link> &{' '}
          <Link to="https://www.mozilla.org/en-US/firefox/developer/">browser</Link>. I plan my day
          in plain text and calendar. I'm using Apple products. I brew coffee in Chemex or V60.
        </p>
        <p>
          Last updated on <time>September 25, 2020</time>
        </p>
      </Stack>
    </Layout>
  );
};

export default UsesPage;

import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO, Stack } from '../components';

const NowPage: FunctionComponent = () => {
  return (
    <Layout location="now">
      <SEO title="Now" />
      <Stack>
        <h1>What I'm doing now</h1>
        <p>
          I'm taking break a from social media. Too much time spent reading & watching other
          people's lives. I'm back to exercise & running - I'm trying to follow{' '}
          <Link to="https://gmb.io/is/">Integral Strength</Link> routine. I've started implementing
          other people's designs from dribble in a pixel-perfect manner as possible. See progress
          under <Link to="https://github.com/krzysztofzuraw/web-experiments">repo</Link>.
        </p>
        <p>
          Last updated on <time>September 25, 2020</time>
        </p>
      </Stack>
    </Layout>
  );
};

export default NowPage;

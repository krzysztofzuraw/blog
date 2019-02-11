import * as React from 'react';

import { SEOContainer } from '../containers';
import { Layout } from '../layout';

const NowPage: React.FunctionComponent = () => (
  <Layout>
    <SEOContainer />
    <div>
      <h1>What I am up to now</h1>
      <ul>
        <li>Writing blog & learning more about TypeScript + React</li>
        <li>Digital minimalism</li>
        <li>Working out (x3 times per week) and eating clean</li>
        <li>
          Organizing <a href="https://www.meetup.com/WrocTypeScript/">Wrocław TypeScript meetup</a>
        </li>
        <li>Living in Wrocław - Poland</li>
        <li>
          Working as a FrontEnd developer at <a href="https://www.ingrid.com/">Ingird</a>
        </li>
      </ul>
      <div>Updated 11.02.2019</div>
    </div>
  </Layout>
);

export default NowPage;

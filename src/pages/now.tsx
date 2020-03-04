import * as React from 'react';

import { Layout, Link, SEO } from '../components';

const NowPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Now" />
      <h2>Coding</h2>
      <p>
        I'm working at <Link to="https://www.ingrid.com">Ingrid</Link> as a frontend team leader.
        Focusing on honing my CSS & HTML skills. Coorganizing&nbsp;
        <Link to="https://www.meetup.com/pl-PL/WrocTypeScript/">Wrocław TypeScript</Link> &&nbsp;
        <Link to="https://www.meetup.com/CSSclassesWroclaw/">CSSClasses</Link>.
      </p>
      <h2>Free time</h2>
      <p>
        Appling&nbsp;
        <Link to="https://www.calnewport.com/books/digital-minimalism/">Digital minimalism</Link>.
        Started reading paper magazines. Playing with Chemex & Aeropress. Started running again.
      </p>
      <p>Updated at 2020-02-22</p>
    </Layout>
  );
};

export default NowPage;

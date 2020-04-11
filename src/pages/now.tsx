import * as React from 'react';

import { Layout, Link, SEO } from '../components';

const NowPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Now | Krzysztof Żuraw" description="What I'm doing now" slug="/now" />
      <h2>Coding</h2>
      <p>
        I'm working from home due to corona at <Link to="https://www.ingrid.com">Ingrid</Link> as a
        frontend team leader. Focusing on honing my CSS & HTML skills. Coorganizing&nbsp;
        <Link to="https://www.meetup.com/pl-PL/WrocTypeScript/">Wrocław TypeScript</Link>
      </p>
      <h2>Free time</h2>
      <p>
        Trying&nbsp;
        <Link to="https://jeffhuang.com/productivity_text_file/">
          Productivity in one text file
        </Link>
        . Moved to plain text. As I'm working from home - brewing coffee at Chemex or Hairo V60 (to
        try the best method). Doing <Link to="https://gmb.io/e/">GMB elements course</Link>.
      </p>
      <p>Updated at 2020-03-21</p>
    </Layout>
  );
};

export default NowPage;

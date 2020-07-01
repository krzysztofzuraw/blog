import * as React from 'react';
import { Layout, Link, SEO } from '../components';

const NowPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Now | Krzysztof Żuraw" description="What I'm doing now" slug="/now" />
      <h2>Coding</h2>
      <p>
        Moving back to <Link to="https://www.ingrid.com">Ingrid</Link> office. Getting back to side
        projects & writing. Co-organizing&nbsp;
        <Link to="https://www.meetup.com/pl-PL/WrocTypeScript/">Wrocław TypeScript</Link>
      </p>
      <h2>Free time</h2>
      <p>
        Trying zettelkasten & beeminder. Moving to plain text for day plans & notes. Doing{' '}
        <Link to="https://gmb.io/is/">GMB integral strength</Link>.
      </p>
      <p>Last updated - 2020-07-01</p>
    </Layout>
  );
};

export default NowPage;

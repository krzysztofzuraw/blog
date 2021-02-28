import React, { FunctionComponent } from 'react';
import { Layout, SEO } from '../components';

const Error: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="404" />
      <article className="prose slashed-zero tabular-nums">
        <h1>Page not found</h1>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
        <button className="rounded-md bg-black text-white p-2" onClick={() => history.back()}>
          Go back
        </button>
      </article>
    </Layout>
  );
};

export default Error;

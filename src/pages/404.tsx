import React, { FunctionComponent } from 'react';
import { Layout, SEO } from '../components';

const Error: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="404" slug="404" />
      <article className="prose lg:prose-lg">
        <h1>Page not found</h1>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
        <button
          onClick={() => history.back()}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm bg-white text-blue-500 hover:bg-blue-50"
        >
          Go back
        </button>
      </article>
    </Layout>
  );
};

export default Error;

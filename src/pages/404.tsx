import React, { FunctionComponent } from 'react';
import { Layout, SEO, Stack } from '../components';

const ErrorPage: FunctionComponent = () => {
  return (
    <Layout location="home">
      <SEO title="404" />
      <Stack>
        <h1>Page not found</h1>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
        <a onClick={() => history.back()} href="">
          Go back
        </a>
      </Stack>
    </Layout>
  );
};

export default ErrorPage;

import { css } from '@emotion/core';
import React, { FunctionComponent } from 'react';
import { Theme } from 'src/theme';
import { Layout, SEO, Stack } from '../components';

const ErrorPage: FunctionComponent = () => {
  return (
    <Layout location="home">
      <SEO title="404" />
      <Stack>
        <h1>Page not found</h1>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
        <button onClick={() => history.back()} css={styles.button}>
          Go back
        </button>
      </Stack>
    </Layout>
  );
};

const styles = {
  button: ({ colors, spacing }: Theme) =>
    css({
      border: '1px solid',
      cursor: 'pointer',
      padding: spacing.base,
      color: colors.boxText,
      backgroundColor: colors.boxBackground,
      ':hover': {
        color: colors.boxBackground,
        backgroundColor: colors.boxText,
      },
      alignSelf: 'flex-start',
    }),
};

export default ErrorPage;

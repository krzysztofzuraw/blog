import { Link } from 'gatsby';
import * as React from 'react';
import { style } from 'typestyle';

import { SEOContainer } from '../containers';
import { Layout } from '../layout';
import { theme } from '../theme';
import { typography } from '../utils';

const wrapperStyle = style({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
  $nest: {
    '& a': {
      textDecoration: 'none',
      color: theme.colors.gray.toString(),
      marginRight: typography.rhythm(0.5),
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
});

const NotFoundPage: React.FunctionComponent = () => (
  <Layout>
    <SEOContainer title="404: Not Found" />
    <div className={wrapperStyle}>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... </p>
      <p>
        Please go back to <Link to="/">home page</Link>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;

import * as React from 'react';
import { style } from 'typestyle';

import { SiteSiteMetadataInputObject_2 } from 'typings/graphql';
import { theme } from '../../theme';
import { typography } from '../../utils';

const headerStyle = style({
  gridArea: 'header',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  $nest: {
    '& h1': {
      margin: `0 0 ${typography.rhythm(1.5)} 0`,
    },
  },
});

const navStyle = style({
  display: 'flex',
  $nest: {
    '& a': {
      textDecoration: 'none',
      color: theme.colors.gray.toString(),
      marginRight: typography.rhythm(0.5),
      textTransform: 'uppercase',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
});

interface Props {
  siteName?: SiteSiteMetadataInputObject_2['siteName'];
  navLinks: JSX.Element[];
}

export const Header: React.FunctionComponent<Props> = ({ siteName, navLinks }) => (
  <header className={headerStyle}>
    <h1>{siteName}</h1>
    <nav className={navStyle}>{navLinks.map(link => link)}</nav>
  </header>
);

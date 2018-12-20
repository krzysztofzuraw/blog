import * as React from 'react';
import { style } from 'typestyle';

import { typography } from '../../layout';
import { theme } from '../../theme';

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

export const Header: React.FunctionComponent = () => (
  <header className={headerStyle}>
    <h1>Krzysztof Żuraw</h1>
    <nav className={navStyle}>
      <a href="">Blog</a>
      <a href="">About</a>
      <a href="">Newsletter</a>
    </nav>
  </header>
);

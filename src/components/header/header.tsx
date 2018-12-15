import * as React from 'react';
import { style } from 'typestyle';

import { theme } from '../../theme';

const headerStyle = style({
  gridArea: 'header',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
  $nest: {
    '& h1': {
      margin: '0 0 24px 0',
      color: theme.colors.black.toHexString(),
    },
  },
});

const navStyle = style({
  display: 'flex',
  $nest: {
    '& a': {
      textDecoration: 'none',
      color: theme.colors.gray.toString(),
      marginRight: '10px',
      textTransform: 'uppercase',
      fontSize: '16px',
      lineHeight: '1.5',
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

import * as React from 'react';
import { media, style } from 'typestyle';

import { theme } from '../../theme';

const headerStyle = style(
  {
    gridArea: 'header',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    $nest: {
      '& h1': {
        margin: 0,
        color: theme.colors.black.toHexString(),
      },
    },
  },
  media({ minWidth: 0, maxWidth: 600 }, { flexDirection: 'column' })
);

const navStyle = style({
  display: 'flex',
  $nest: {
    '& a': {
      textDecoration: 'none',
      color: theme.colors.black.toHexString(),
      marginRight: '10px',
    },
  },
});

export const Header: React.FunctionComponent = () => (
  <header className={headerStyle}>
    <h1>Krzysztof Żuraw blog</h1>
    <nav className={navStyle}>
      <a href="">Blog</a>
      <a href="">About</a>
      <a href="">Newsletter</a>
    </nav>
  </header>
);

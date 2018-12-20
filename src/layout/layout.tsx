import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { style } from 'typestyle';
import Typography from 'typography';

import { Header } from '../components';

normalize();
setupPage('#___gatsby');

export const typography = new Typography({
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
});
typography.injectStyles();

const wrapperStyle = style({
  display: 'grid',
  gridTemplateAreas: `
    "header"
    "content"
  `,
  gridTemplateRows: 'auto 1fr',
  width: '100vw',
  height: '100vh',
  padding: `${typography.rhythm(2.5)} ${typography.rhythm(1.25)}`,
});

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className={wrapperStyle}>
    <Header />
    {children}
  </div>
);

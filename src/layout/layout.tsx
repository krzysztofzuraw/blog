import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { style } from 'typestyle';
import Typography from 'typography';

import { Header } from '../components';

normalize();
setupPage('#___gatsby');

export const typography = new Typography({
  baseFontSize: '23px',
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
  padding: '2.5em 1.25em',
});

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className={wrapperStyle}>
    <Header />
    {children}
  </div>
);

import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { style } from 'typestyle';

import { Header } from '../components';
import { typography } from '../utils';

normalize();
setupPage('#___gatsby');

const wrapperStyle = style({
  display: 'grid',
  gridTemplateAreas: `
    "header"
    "content"
  `,
  gridTemplateRows: 'auto 1fr',
  minWidth: '100vw',
  minHeight: '100vh',
  padding: `${typography.rhythm(2.5)} ${typography.rhythm(1.25)}`,
});

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className={wrapperStyle}>
    <Header />
    {children}
  </div>
);

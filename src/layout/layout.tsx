import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { cssRule, style } from 'typestyle';

import { HeaderContainer } from '../containers';
import { theme } from '../theme';
import { typography } from '../utils';

normalize();
setupPage('#___gatsby');
cssRule('a', { textDecoration: 'none', color: theme.colors.gray.toString() });
cssRule('a:hover', {
  textDecoration: 'underline',
});

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
    <HeaderContainer />
    {children}
  </div>
);

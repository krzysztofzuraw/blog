import { normalize, setupPage } from 'csstips';
import * as React from 'react';
import { cssRule } from 'typestyle';

import { HeaderContainer } from '../containers';
import { theme } from '../theme';
import { typography } from '../utils';

normalize();
setupPage('#___gatsby');
cssRule('a', { textDecoration: 'none', color: theme.colors.gray.toString() });
cssRule('a:hover', {
  textDecoration: 'underline',
});
cssRule('body', {
  margin: '0 auto',
  maxWidth: `${typography.rhythm(35)}`,
  lineHeight: '1.5',
  padding: `${typography.rhythm(2.75)} ${typography.rhythm(0.75)}`,
  color: '#555',
});

export const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
  </div>
);

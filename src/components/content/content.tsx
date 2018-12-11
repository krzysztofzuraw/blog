import * as React from 'react';
import { style } from 'typestyle';

import { theme } from '../../theme';

const contentStyle = style({
  gridArea: 'content',
  color: theme.colors.black.toHexString(),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});

export const Content: React.FunctionComponent = ({ children }) => (
  <div className={contentStyle}>{children}</div>
);

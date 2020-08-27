import React, { FunctionComponent } from 'react';
import { Theme } from '../theme';

type Props = {
  space?: keyof Theme['spacing'];
};

export const Stack: FunctionComponent<Props> = ({ children, space = 's1' }) => (
  <div
    css={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      '> *': { marginBottom: 0, marginTop: 0 },
      '> * + *': {
        marginTop: theme.spacing[space],
      },
    })}
  >
    {children}
  </div>
);

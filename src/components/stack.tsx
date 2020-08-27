import { Theme } from '../theme';
import styled from '@emotion/styled';

type Props = {
  space?: keyof Theme['spacing'];
  as?: 'ul' | 'li';
};

export const Stack = styled.div<Props, Theme>(({ theme, space = 's+1' }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  '> *': { marginBottom: 0, marginTop: 0 },
  '> * + *': {
    marginTop: theme.spacing[space],
  },
}));

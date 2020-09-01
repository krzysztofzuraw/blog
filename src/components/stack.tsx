import styled from '@emotion/styled';
import { Theme } from '../theme';

type Props = {
  space?: keyof Theme['spacing'];
  as?: 'ul' | 'li' | 'article';
};

export const Stack = styled.div<Props, Theme>(({ theme, space = 'base' }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  '> *': { marginBottom: 0, marginTop: 0 },
  '> * + *': {
    marginTop: theme.spacing[space],
  },
}));

import React, { FunctionComponent } from 'react';
import { Global, css, ThemeProvider } from '@emotion/react';
import '@fontsource/jetbrains-mono/variable.css';
import '@fontsource/jetbrains-mono/variable-italic.css';

import { Link } from '.';

const theme = {
  colors: {
    background: '#F7F7F7',
    text: '#191919',
  },
};

export const Layout: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div css={styles.wrapper}>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          html: {
            fontSize: '100%',
            lineHeight: '1.5',
          },
          body: {
            fontFamily: 'JetBrains MonoVariable, monospace',
            fontVariationSettings: '"wght" 400',
            margin: 0,
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
          },
        }}
      />
      <nav css={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  </ThemeProvider>
);

const styles = {
  wrapper: css({
    width: '100vw',
    height: '100vh',
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: 'minmax(10px,1fr) min(65ch, calc(100% - 4rem)) minmax(10px,1fr)',
    gap: '2rem',
    gridTemplateRows: 'min-content minmax(10px, 1fr) min-content',
    '> *': {
      gridColumn: 2,
    },
  }),
  nav: css({
    display: 'grid',
    justifyItems: 'end',
    '> ul': {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      display: 'flex',
      gap: '1rem',
      fontVariationSettings: '"wght" 600',
    },
  }),
};

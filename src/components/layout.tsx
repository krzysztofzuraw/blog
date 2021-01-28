import React, { FunctionComponent } from 'react';
import { Global, css, ThemeProvider } from '@emotion/react';
import '@fontsource/jetbrains-mono/variable.css';
import '@fontsource/jetbrains-mono/variable-italic.css';
import facepaint from 'facepaint';

import { Link } from '.';

const breakpoints = [640];

export const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const theme = {
  colors: {
    background: '#F7F7F7',
    text: '#191919',
    blockquote: '#C7C5C2',
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
          html: mq({ fontSize: ['88%', '100%'], lineHeight: '1.5' }),
          body: {
            fontFamily: 'JetBrains MonoVariable, monospace',
            fontVariationSettings: '"wght" 400',
            margin: 0,
            backgroundColor: theme.colors.background,
            color: theme.colors.text,
          },
          img: {
            maxWidth: '100%',
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
      <footer css={styles.footer}>Footer</footer>
    </div>
  </ThemeProvider>
);

const styles = {
  wrapper: css({
    minHeight: '100vh',
    padding: '2rem 0',
    display: 'grid',
    gridTemplateColumns: 'minmax(10px,1fr) min(80ch, calc(100% - 4rem)) minmax(10px,1fr)',
    gap: '2rem',
    gridTemplateRows: 'auto minmax(10px, 1fr) auto',
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
  footer: css({
    display: 'grid',
    placeItems: 'center',
  }),
};

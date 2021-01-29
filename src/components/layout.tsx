import React, { FunctionComponent } from 'react';
import { Global, css, ThemeProvider } from '@emotion/react';

import MonoLisaRegular from '../../static/fonts/MonoLisa-Regular.woff2';
import MonoLisaRegularItalic from '../../static/fonts/MonoLisa-RegularItalic.woff2';
import MonoLisaBold from '../../static/fonts/MonoLisa-Bold.woff2';

import { Link } from '.';

const theme = {
  colors: {
    background: '#F7F7F7',
    text: '#191919',
    blockquote: '#555453',
  },
};

export const Layout: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div css={styles.wrapper}>
      <Global styles={styles.global} />
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
  global: css`
    * {
      box-sizing: border-box;
    }
    html {
      line-height: 1.5;
      font-size: 88%;
      @media (min-width: 640px) {
        font-size: 100%;
      }
    }
    @font-face {
      font-family: MonoLisa;
      font-style: normal;
      font-weight: 400;
      font-display: optional;
      src: url('${MonoLisaRegular}') format('woff2');
    }
    @font-face {
      font-family: MonoLisa;
      font-style: italic;
      font-weight: 400;
      font-display: optional;
      src: url('${MonoLisaRegularItalic}') format('woff2');
    }
    @font-face {
      font-family: MonoLisa;
      font-style: normal;
      font-weight: 600;
      font-display: optional;
      src: url('${MonoLisaBold}') format('woff2');
    }
    body {
      font-family: MonoLisa, monospace;
      font-weight: 400;
      margin: 0;
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
    }
    img {
      max-width: 100%;
    }
    code, pre {
      font-family: MonoLisa;
      font-size: 0.875rem;
    }
  `,
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
      fontWeight: 600,
    },
  }),
  footer: css({
    display: 'grid',
    placeItems: 'center',
  }),
};

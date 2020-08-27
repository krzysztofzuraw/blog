import { ThemeProvider } from 'emotion-theming';
import React, { FunctionComponent } from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';

export type Theme = {
  colors: {
    white: string;
    black: string;
  };
  spacing: {
    's-1': string;
    code: string;
    s0: string;
    's+1': string;
    's+2': string;
    's+3': string;
    's+4': string;
  };
  ratio: number;
  measure: string;
};

const theme: Theme = {
  colors: {
    white: '#fafafa',
    black: '#333',
  },
  spacing: {
    's-1': '0.667rem',
    code: '0.875rem',
    s0: '1rem',
    's+1': '1.5rem',
    's+2': '2.25rem',
    's+3': '3.375rem',
    's+4': '5.063rem',
  },
  ratio: 1.5,
  measure: '60ch',
};

export const BlogTheme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        ${emotionReset}

        @font-face {
          font-family: 'iA Writer Quattro S';
          font-style: normal;
          font-weight: 400;
          src: local(iA Writer Quattro S),
            url('../../fonts/iAWriterQuattroS-Regular.woff2') format('woff2');
        }

        @font-face {
          font-family: 'iA Writer Quattro S';
          font-style: italic;
          font-weight: 400;
          src: local(iA Writer Quattro S),
            url('../../fonts/iAWriterQuattroS-Italic.woff2') format('woff2');
        }

        @font-face {
          font-family: 'iA Writer Quattro S';
          font-style: normal;
          font-weight: 600;
          src: local(iA Writer Quattro S),
            url('../../fonts/iAWriterQuattroS-Bold.woff2') format('woff2');
        }

        @font-face {
          font-family: 'iA Writer Quattro S';
          font-style: italic;
          font-weight: 600;
          src: local(iA Writer Quattro S),
            url('../../fonts/iAWriterQuattroS-BoldItalic.woff2') format('woff2');
        }

        html {
          font-family: 'iA Writer Quattro S', sans-serif;
          font-size: 100%;
        }

        * {
          box-sizing: border-box;
          max-width: ${theme.measure};
        }

        html,
        body,
        div,
        header,
        nav,
        main,
        footer {
          max-width: none;
        }

        body {
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
          line-height: ${theme.ratio};
        }

        h1 {
          font-size: ${theme.spacing['s+3']};
          font-weight: 600;
        }

        h2 {
          font-size: ${theme.spacing['s+2']};
          font-weight: 600;
        }

        h3 {
          font-size: ${theme.spacing['s+1']};
          font-weight: 600;
        }

        a {
          color: ${theme.colors.black};
        }

        p {
          font-size: ${theme.spacing.s0};
        }
      `}
    />
    {children}
  </ThemeProvider>
);

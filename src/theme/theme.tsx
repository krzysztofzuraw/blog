import { css, Global } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { ThemeProvider } from 'emotion-theming';
import React, { FunctionComponent } from 'react';

export type Theme = {
  colors: {
    background: string;
    text: string;
  };
  spacing: {
    small: string;
    code: string;
    base: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
  ratio: number;
  measure: string;
};

const theme: Theme = {
  colors: {
    background: '#fafafa',
    text: '#333',
  },
  spacing: {
    small: '0.667rem',
    code: '0.875rem',
    base: '1rem',
    medium: '1.5rem',
    large: '2.25rem',
    xlarge: '3.375rem',
    xxlarge: '5.063rem',
  },
  ratio: 1.5,
  measure: '60ch',
};

export const BlogTheme: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        ${emotionReset}

        html {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
        pre,
        code,
        footer {
          max-width: none;
        }

        body {
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
          line-height: ${theme.ratio};
        }

        h1 {
          font-size: ${theme.spacing.xlarge};
          font-weight: 600;
        }

        h2 {
          font-size: ${theme.spacing.large};
          font-weight: 600;
        }

        h3 {
          font-size: ${theme.spacing.medium};
          font-weight: 600;
        }

        a {
          color: ${theme.colors.text};
        }

        p {
          font-size: ${theme.spacing.base};
        }

        pre,
        code {
          font-size: ${theme.spacing.code} !important;
          font-family: SF Mono, Menlo, Monaco, Consolas, 'Droid Sans Mono', 'Courier New',
            'Inconsolata', monospace !important;
        }

        .gatsby-highlight {
          max-width: calc(100vw - ${theme.spacing.medium});
        }

        img {
          width: 100%;
        }

        time {
          font-weight: 200;
        }
      `}
    />
    {children}
  </ThemeProvider>
);

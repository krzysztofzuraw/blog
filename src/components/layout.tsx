import React, { FunctionComponent } from 'react';
import { Global, css } from '@emotion/react';

export const Layout: FunctionComponent = ({ children }) => (
  <>
    <Global
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          fontSize: '100%',
        },
        body: {
          fontFamily: 'iA Writer Quattro S, sans-serif',
          width: '100vw',
          height: '100vh',
          margin: 0,
        },
      }}
    />
    <nav>
      <ul css={{ padding: 0, margin: 0, listStyle: 'none' }}>
        <li>Home</li>
        <li>Blog</li>
      </ul>
    </nav>
    <main>Content</main>
    <footer>Footer</footer>
  </>
);

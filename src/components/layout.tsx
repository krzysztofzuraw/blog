import * as React from 'react';

import { Footer } from './footer';
import { Nav } from './nav';

import '../styles/index.scss';
import '../styles/prism.scss';

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <article>{children}</article>
      <Footer />
    </div>
  );
};

import * as React from 'react';
import '../styles/index.scss';
import { Footer } from './footer';
import { Nav } from './nav';

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      <article>{children}</article>
      <Footer />
    </div>
  );
};

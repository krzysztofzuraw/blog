import * as React from 'react';

import '../styles/layout.css';

import Footer from './footer';
import { Header } from './header';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

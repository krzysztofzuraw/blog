import { Link } from 'gatsby';
import * as React from 'react';

import '../styles/layout.css';
import { rhythm, scale } from '../utils/typography';

import Footer from './footer';
import { Header } from './header';

interface Props {
  location: Location;
  title?: string | null;
}

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

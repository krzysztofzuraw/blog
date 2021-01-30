import React, { FunctionComponent } from 'react';

import { Link } from '.';

export const Layout: FunctionComponent = ({ children }) => (
  <div className="wrapper">
    <nav className="nav">
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
    <footer className="footer">Footer</footer>
  </div>
);

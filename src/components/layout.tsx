import React, { FunctionComponent } from 'react';

import { Link } from '.';

export const Layout: FunctionComponent = ({ children }) => (
  <main>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
    <section>{children}</section>
    <footer>Footer</footer>
  </main>
);

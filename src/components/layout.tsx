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
    <footer>
      <span>
        © 2016-{new Date().getFullYear()} Krzysztof Żuraw (blog&#xFF20;kzuraw&#x2024;com). Build
        with these <Link to="/credits">tools</Link>.
      </span>
    </footer>
  </main>
);

import React, { FunctionComponent } from 'react';

import { Link } from './link';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="h-screen max-w-3xl mx-auto p-4 grid grid-rows-layout gap-y-4">
      <header className="flex justify-end">
        <ul className="grid grid-flow-col gap-4">
          <li>
            <Link className="underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="underline" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>Footer is here</footer>
    </div>
  );
};

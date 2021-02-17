import React, { FunctionComponent } from 'react';

import { Link } from '.';

export const Layout: FunctionComponent = ({ children }) => (
  <main className="antialiased text-gray-900 mx-auto max-w-prose h-screen grid grid-rows-layout gap-8 py-8 lg:text-xl">
    <nav className="grid justify-end">
      <ul className="flex font-medium gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
    <section>{children}</section>
    <footer className="grid place-items-center prose lg:text-xl">
      <span>
        © 2016-{new Date().getFullYear()} Krzysztof Żuraw (blog&#xFF20;kzuraw&#x2024;com). Build
        with these{' '}
        <Link to="/credits" className="underline">
          tools
        </Link>
        .
      </span>
    </footer>
  </main>
);

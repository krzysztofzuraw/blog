import React, { FunctionComponent } from 'react';

import { Link } from '.';

export const Layout: FunctionComponent = ({ children }) => (
  <main className="px-4 py-10 antialiased text-gray-900 mx-auto max-w-3xl sm:py-12 sm:px-6 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl h-screen">
    <nav className="flex items-end justify-end">
      <ul className="flex">
        <li className="p-1 sm:p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-1 sm:p-4">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
    <section>{children}</section>
    <footer className="p-8 grid place-items-center prose lg:prose-xl max-w-full">
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

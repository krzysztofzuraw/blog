import React, { FunctionComponent } from 'react';

import { Link } from './link';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="h-screen max-w-3xl mx-auto p-4 grid grid-rows-layout gap-y-4">
      <header className="flex justify-end">
        <ul className="grid grid-flow-col gap-4 underline font-bold text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer className="grid grid-cols-3 border-t-2 py-2">
        <ul className="grid gap-2 underline">
          <li>
            <Link to="/uses">Uses</Link>
          </li>
          <li>
            <Link to="/now">Now</Link>
          </li>
          <li>
            <Link to="/newsletter">Newsletter</Link>
          </li>
          <li>
            <Link to="/credits">Credits</Link>
          </li>
          <li>
            <Link to="/credits">RSS</Link>
          </li>
        </ul>
        <ul className="grid gap-2 underline">
          <li>
            <Link to="">GitHub</Link>
          </li>
          <li>
            <Link to="">Twitter</Link>
          </li>
          <li>
            <Link to="">LinkedIn</Link>
          </li>
        </ul>
        <p className="slashed-zero tabular-nums">
          © 2016-{new Date().getFullYear()}{' '}
          <Link to="mailto:blog@kzuraw.com" className="underline">
            Krzysztof Żuraw
          </Link>
        </p>
      </footer>
    </div>
  );
};

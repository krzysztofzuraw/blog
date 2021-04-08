import React, { FunctionComponent } from 'react';
import { Link } from './link';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="mx-auto max-w-3xl grid h-screen px-4 py-10 gap-6">
      <header role="banner" className="flex justify-end">
        <ul className="flex gap-2 font-bold lg:text-lg">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </header>
      {children}
      <footer
        role="contentinfo"
        className="grid lg:text-lg grid-cols-3 border-gray-200 border-t-2 py-2"
      >
        <ul>
          <li className="hover:underline">
            <Link to="/uses">Uses</Link>
          </li>
          <li className="hover:underline">
            <Link to="/now">Now</Link>
          </li>
          <li className="hover:underline">
            <Link to="https://buttondown.email/krzysztof_zuraw">Newsletter</Link>
          </li>
          <li className="hover:underline">
            <Link to="/feeds/all.rss.xml">RSS</Link>
          </li>
        </ul>
        <ul className="social">
          <li className="hover:underline">
            <Link to="https://github.com/krzysztofzuraw">GitHub</Link>
          </li>
          <li className="hover:underline">
            <Link to="https://twitter.com/krzysztof_zuraw">Twitter</Link>
          </li>
          <li className="hover:underline">
            <Link to="https://pl.linkedin.com/in/krzysztofzuraw">LinkedIn</Link>
          </li>
        </ul>
        <p>
          © 2016-{new Date().getFullYear()} <Link to="mailto:blog@kzuraw.com">Krzysztof Żuraw</Link>
        </p>
      </footer>
    </div>
  );
};

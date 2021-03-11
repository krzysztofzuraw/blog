import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from './link';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="preload"
          href="/fonts/Inter-roman.var.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Inter-italic.var.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/MonoLisa-Regular.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
      </Helmet>
      <div className="layout">
        <header role="banner">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer role="contentinfo">
          <ul>
            <li>
              <Link to="/uses">Uses</Link>
            </li>
            <li>
              <Link to="/now">Now</Link>
            </li>
            <li>
              <Link to="https://buttondown.email/krzysztof_zuraw">Newsletter</Link>
            </li>
            <li>
              <Link to="/credits">Credits</Link>
            </li>
            <li>
              <Link to="/feeds/all.rss.xml">RSS</Link>
            </li>
          </ul>
          <ul className="social">
            <li>
              <Link to="https://github.com/krzysztofzuraw">GitHub</Link>
            </li>
            <li>
              <Link to="https://twitter.com/krzysztof_zuraw">Twitter</Link>
            </li>
            <li>
              <Link to="https://pl.linkedin.com/in/krzysztofzuraw">LinkedIn</Link>
            </li>
          </ul>
          <p>
            © 2016-{new Date().getFullYear()}{' '}
            <Link to="mailto:blog@kzuraw.com">Krzysztof Żuraw</Link>
          </p>
        </footer>
      </div>
    </>
  );
};

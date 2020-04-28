import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { LayoutQuery } from 'typings/graphql';
import { Link } from '.';
import '../styles/layout.css';
import '../styles/prism.css';

export const Layout: React.FunctionComponent = ({ children }) => {
  const { site } = useStaticQuery<LayoutQuery>(
    graphql`
      query Layout {
        site {
          siteMetadata {
            author
            social {
              email
            }
          }
        }
      }
    `
  );

  return (
    <div className="wrapper">
      <nav className="menu">
        <h1 title="Krzysztof Żuraw">🏗️ Krzysztof Żuraw 🦄</h1>
        <ul>
          <li className="menu-item">
            <Link to="/">Home 🏠</Link>
          </li>
          <li className="menu-item">
            <Link to="/blog">Blog ✍️</Link>
          </li>
          <li className="menu-item">
            <Link to="/now">Now 📆</Link>
          </li>
          <li className="menu-item">
            <Link to="/uses">Uses 💻</Link>
          </li>
        </ul>
      </nav>
      <div className="content">{children}</div>
      <footer>
        <div>
          © 2016-{new Date().getFullYear()}&nbsp;
          <Link to={site!.siteMetadata.social.email}>{site!.siteMetadata.author}</Link>. Built with
          Gatsby.
        </div>
      </footer>
    </div>
  );
};

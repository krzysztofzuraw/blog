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
      <nav>
        <h1 title="Żuraw in english is crane hence crane emoji">
          Krzysztof Żuraw personal site 🏗️
        </h1>
        <ul>
          <li>
            <Link to="/">
              <h2>Home 🏠</h2>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <h2>Blog ✍️</h2>
            </Link>
          </li>
          <li>
            <Link to="/now">
              <h2>Now 📆</h2>
            </Link>
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

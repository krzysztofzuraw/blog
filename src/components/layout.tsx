import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

import { Link } from '.';
import '../styles/layout.css';

type LayoutQuery = {
  site: {
    siteMetadata: {
      author: string;
      social: {
        email: string;
      };
    };
  };
};

export const Layout: React.FunctionComponent = ({ children }) => {
  const {
    site: {
      siteMetadata: {
        author,
        social: { email },
      },
    },
  } = useStaticQuery<LayoutQuery>(
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
        <h1>Krzysztof Żuraw personal site 🏗️</h1>
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
          <Link to={email}>{author}</Link>. Built with Gatsby.
        </div>
      </footer>
    </div>
  );
};

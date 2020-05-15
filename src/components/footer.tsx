import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { LayoutQuery } from 'typings/graphql';

import { Link } from '.';

export const Footer: React.FunctionComponent = () => {
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
    <footer>
      <div>
        <span>
          © 2016-{new Date().getFullYear()}&nbsp;
          <Link to={site!.siteMetadata.social.email}>{site!.siteMetadata.author}</Link>. Built with
          Gatsby.
        </span>
      </div>
      <div className="links">
        <Link to="/">RSS</Link>
        <Link to="/blog">Github</Link>
        <Link to="/now">Twitter</Link>
        <Link to="/uses">Instagram</Link>
      </div>
    </footer>
  );
};

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
              github
              keybase
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
        <Link to="/feeds/all.rss.xml">RSS</Link>
        <Link to={site?.siteMetadata.social.github ?? ''}>Github</Link>
        <Link to={site?.siteMetadata.social.keybase ?? ''}>Keybase</Link>
      </div>
    </footer>
  );
};

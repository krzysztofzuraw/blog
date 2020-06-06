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
              twitter
              instagram
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
      <div className="links h-card">
        <Link to="https://krzysztofzuraw.com" className="u-url hidden" rel="me" />
        <Link to="/feeds/all.rss.xml">RSS</Link>
        <Link to={site?.siteMetadata.social.github ?? ''} rel="me" className="u-url">
          Github
        </Link>
        <Link to={site?.siteMetadata.social.twitter ?? ''} rel="me" className="u-url">
          Twitter
        </Link>
        <Link to={site?.siteMetadata.social.instagram ?? ''} rel="me" className="u-url">
          Instagram
        </Link>
      </div>
    </footer>
  );
};

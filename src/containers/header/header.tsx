import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';

import { SiteSiteMetadataInputObject_2 } from 'typings/graphql';
import { Header } from '../../components';

interface Data {
  site: {
    siteMetadata: SiteSiteMetadataInputObject_2;
  };
}

export const HeaderContainer: React.FunctionComponent = () => {
  const navLinks = [
    <Link to="/" key="nav_1">
      Blog
    </Link>,
    <Link to="/about" key="nav_2">
      About
    </Link>,
    <Link to="/newsletter" key="nav_3">
      Newsletter
    </Link>,
  ];

  return (
    <StaticQuery
      query={headerQuery}
      render={(data: Data) => (
        <Header siteName={data.site.siteMetadata.siteName} navLinks={navLinks} />
      )}
    />
  );
};

const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

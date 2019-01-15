import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';

import { SiteSiteMetadataInputObject_2 } from 'typings/graphql';
import { About } from '../../components';

interface Data {
  site: {
    siteMetadata: SiteSiteMetadataInputObject_2;
  };
}

export const AboutContainer = () => (
  <StaticQuery
    query={socialLinksQuery}
    render={(data: Data) => <About socialMedia={data.site.siteMetadata.social} />}
  />
);

const socialLinksQuery = graphql`
  query SocialLinksQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          linkedin
          email
        }
      }
    }
  }
`;

import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';

import { SiteSiteMetadataInputObject_2 } from 'typings/graphql';
import { SEO } from '../../components';

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
}

interface Data {
  site: {
    siteMetadata: SiteSiteMetadataInputObject_2;
  };
}

export const SEOContainer: React.FunctionComponent<Props> = ({
  title,
  description,
  keywords = ['TypeScript', 'JavaScript', 'blog', 'frontend', 'learning'],
}) => (
  <StaticQuery
    query={seoQuery}
    render={(data: Data) => {
      if (data.site.siteMetadata) {
        const siteMetadata = data.site.siteMetadata;
        return (
          <SEO
            title={title || (siteMetadata.siteName as string)}
            author={siteMetadata.author}
            description={description || (siteMetadata.description as string)}
            keywords={keywords}
          />
        );
      } else {
        return null;
      }
    }}
  />
);

const seoQuery = graphql`
  query seoQuery {
    site {
      siteMetadata {
        siteName
        description
        author
      }
    }
  }
`;

import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

export const SEO: React.FunctionComponent<{ title: string }> = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            siteName
            description
            author
          }
        }
      }
    `
  );
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.siteName}`}
      meta={[
        {
          name: 'description',
          content: site.siteMetadata.description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: site.siteMetadata.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: site.siteMetadata.description,
        },
      ]}
    />
  );
};

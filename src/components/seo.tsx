import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { SeoQuery } from 'typings/graphql';

export const SEO: React.FunctionComponent<{
  title: string;
  description: string;
  slug: string;
}> = ({ title, description, slug }) => {
  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query SEO {
        site {
          siteMetadata {
            siteName
            author
            siteUrl
            keywords
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
      link={[
        {
          rel: 'icon',
          href:
            'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏗️</text></svg>',
        },
      ]}
      meta={[
        {
          name: 'description',
          content: description,
        },

        {
          name: 'keywords',
          content: site!.siteMetadata.keywords,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:image',
          content: `https://og-image-peach.now.sh/${encodeURIComponent(title)}`,
        },
        {
          property: 'og-locale',
          content: 'en_US',
        },
        {
          property: 'og:image:width',
          content: '640px',
        },
        {
          property: 'og:image:height',
          content: '640px',
        },
        {
          property: 'og:url',
          content: `${site?.siteMetadata.siteUrl}${slug}`,
        },
        {
          property: 'og:description',
          content: description,
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
          content: '@krzysztof_zuraw',
        },
        {
          name: 'twitter:site',
          content: '@krzysztof_zuraw',
        },
        {
          name: 'twitter:image',
          content: `https://og-image-peach.now.sh/${encodeURIComponent(title)}`,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ]}
    />
  );
};

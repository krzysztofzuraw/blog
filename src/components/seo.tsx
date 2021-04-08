import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

export const SEO: FunctionComponent<{
  title?: string;
  description?: string;
  slug?: string;
  type?: 'website' | 'article';
}> = ({ title = '', description, slug, type = 'website' }) => {
  const { site } = useStaticQuery<GatsbyTypes.SEOQuery>(graphql`
    query SEO {
      site {
        siteMetadata {
          siteUrl
          siteName
          author
          description
          keywords
          social {
            twitter
          }
        }
      }
    }
  `);
  return (
    <Helmet titleTemplate={`%s | ${site?.siteMetadata?.siteName}`}>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={`${description || site?.siteMetadata?.description}`} />
      <meta name="keywords" content={site?.siteMetadata?.keywords} />
      <meta name="og:title" content={`${title} | ${site?.siteMetadata?.siteName}`} />
      <meta name="og:type" content={type} />
      <meta name="og:url" content={`${site?.siteMetadata?.siteUrl}${slug}`} />
      <meta name="og:description" content={`${description || site?.siteMetadata?.description}`} />
      <meta
        name="og:image"
        content={`${site?.siteMetadata?.siteUrl}/social-image?title=${encodeURIComponent(title)}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={site?.siteMetadata?.siteUrl} />
      <meta name="twitter:url" content={`${site?.siteMetadata?.siteUrl}${slug}`} />
      <meta name="twitter:creator" content={site?.siteMetadata?.social?.twitter} />
      <meta name="twitter:title" content={`${title} | ${site?.siteMetadata?.siteName}`} />
      <meta
        name="twitter:description"
        content={`${description || 'Personal site about TypeScript, React, CSS & HTML'}`}
      />
      <meta
        name="og:image"
        content={`${site?.siteMetadata?.siteUrl}/social-image?title=${encodeURIComponent(title)}`}
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${site?.siteMetadata?.siteName} blog's RSS Feed`}
        href={`{${site?.siteMetadata?.siteUrl}/feeds/all.rss.xml`}
      />
    </Helmet>
  );
};

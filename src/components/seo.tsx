import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

export const SEO: FunctionComponent<{
  title?: string;
  description?: string;
  slug?: string;
  type?: 'website' | 'article';
}> = ({ title = '', description, slug, type = 'website' }) => (
  <Helmet titleTemplate="%s | Krzysztof Żuraw">
    <html lang="en" />
    <title>{title}</title>
    <meta
      name="description"
      content={`${description || 'Personal site about TypeScript, React, CSS & HTML'}`}
    />
    <meta
      name="keywords"
      content="typescript, react, blog, personalBlog, css, html, frontend development"
    />
    <meta name="og:title" content={`${title} | Krzysztof Żuraw`} />
    <meta name="og:type" content={type} />
    <meta name="og:url" content={`https://krzysztofzuraw.com${slug}`} />
    <meta
      name="og:description"
      content={`${description || 'Personal site about TypeScript, React, CSS & HTML'}`}
    />
    <meta
      name="og:image"
      content={`https://krzysztofzuraw.com/social-image?title=${encodeURIComponent(title)}`}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="krzysztofzuraw.com" />
    <meta name="twitter:url" content={`https://krzysztofzuraw.com${slug}`} />
    <meta name="twitter:creator" content="@krzysztof_zuraw" />
    <meta name="twitter:title" content={`${title} | Krzysztof Żuraw`} />
    <meta
      name="twitter:description"
      content={`${description || 'Personal site about TypeScript, React, CSS & HTML'}`}
    />
    <meta
      name="og:image"
      content={`https://krzysztofzuraw.com/social-image?title=${encodeURIComponent(title)}`}
    />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Krzysztof Żuraw blog's RSS Feed"
      href="https://krzysztofzuraw.com/feeds/all.rss.xml"
    />
  </Helmet>
);

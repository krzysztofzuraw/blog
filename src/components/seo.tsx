import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

export const SEO: FunctionComponent<{ title: string; description?: string }> = ({
  title,
  description,
}) => (
  <Helmet titleTemplate="%s | Krzysztof Żuraw">
    <html lang="en" />
    <title>{title}</title>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏗️</text></svg>"
    />
    <meta
      name="description"
      content={`${description || 'Personal site about TypeScript, React, CSS & HTML'}`}
    />
    <meta
      name="keywords"
      content="typescript, react, blog, personalBlog, css, html, frontend development"
    />
    <meta name="og:title" content={`${title} | Krzysztof Żuraw`} />
    <meta
      name="og:description"
      content={`${description || 'Personal site about TypeScript, React, CSS & HTML'}`}
    />
    <meta name="twitter:creator" content="@krzysztof_zuraw" />
    <meta name="twitter:title" content={`${title} | Krzysztof Żuraw`} />
    <meta
      name="twitter:description"
      content={`${description || 'Personal site about TypeScript, React, CSS & HTML'}`}
    />
  </Helmet>
);

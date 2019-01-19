import * as React from 'react';
import Helmet from 'react-helmet';

import { SiteSiteMetadataInputObject_2 } from 'typings/graphql';

interface Props {
  title: string;
  author: SiteSiteMetadataInputObject_2['author'];
  keywords: string[];
  description: string;
}

export const SEO: React.FunctionComponent<Props> = ({ title, author, keywords, description }) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={title}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
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
        content: author as string,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords.join(', '),
      },
    ]}
  />
);

import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title: string;
};

export const SEO: FunctionComponent<Props> = ({ title }) => (
  <Helmet titleTemplate="%s | Krzysztof Żuraw">
    <html lang="en" />
    <title>{title}</title>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏗️</text></svg>"
    />
    <meta name="description">Frontend | Design | Coffee</meta>
  </Helmet>
);

'use strict';
module.exports = {
  siteMetadata: {
    siteName: 'Krzysztof Żuraw blog',
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    'gatsby-transformer-remark',
  ],
};

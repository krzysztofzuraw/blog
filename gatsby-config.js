'use strict';
module.exports = {
  siteMetadata: {
    siteName: 'Krzysztof Żuraw blog',
    author: 'Kzysztof Żuraw',
    description: 'Blog about TypeScript',
    siteUrl: 'https://krzysztofzuraw.com',
    social: {
      twitter: 'https://twitter.com/krzysztof_zuraw',
      linkedin: 'https://pl.linkedin.com/in/krzysztofzuraw',
      github: 'https://github.com/krzysztofzuraw',
      email: 'mailto:noaaln@fastmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
  ],
};

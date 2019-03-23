'use strict';
module.exports = {
  siteMetadata: {
    siteName: 'Krzysztof Żuraw blog',
    author: 'Krzysztof Żuraw',
    description: 'Blog about TypeScript',
    siteUrl: 'https://krzysztofzuraw.com',
    social: {
      twitter: 'https://twitter.com/krzysztof_zuraw',
      linkedin: 'https://pl.linkedin.com/in/krzysztofzuraw',
      github: 'https://github.com/krzysztofzuraw',
      email: 'mailto:noaaln@fastmail.com',
      speakerDeck: 'https://speakerdeck.com/krzysztofzuraw',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
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
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-136382109-1',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Krzysztof Żuraw blog',
        short_name: `Krzysztof Żuraw`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#33333399`,
        display: `minimal-ui`,
        icon: `assets/logo.png`,
      },
    },
  ],
};

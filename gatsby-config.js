'use strict';
module.exports = {
  siteMetadata: {
    siteName: 'Krzysztof Żuraw blog',
    author: 'Krzysztof Żuraw',
    description: 'Krzysztof Żuraw personal blog: TypeScript, JavaScript & FE development.',
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
    'gatsby-transformer-sharp',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
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
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteName
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
            {
              allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
                edges {
                  node {
                    excerpt
                    html
                    frontmatter {
                      title
                      date
                      slug
                    }
                  }
                }
              }
            }
            `,
            output: '/feeds/all.rss.xml',
            title: "Krzysztof Żuraw blog's RSS Feed",
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-136382109-1',
        respectDNT: true,
      },
    },
  ],
};

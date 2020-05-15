'use strict';

module.exports = {
  siteMetadata: {
    siteName: 'Krzysztof Żuraw',
    author: 'Krzysztof Żuraw',
    description: 'Frontend | Design: Learning | Coffee',
    siteUrl: 'https://krzysztofzuraw.com',
    keywords: 'JavaScript, TypeScript, RxJS, React, Redux',
    social: {
      linkedin: 'https://pl.linkedin.com/in/krzysztofzuraw',
      github: 'https://github.com/krzysztofzuraw',
      email: 'mailto:blog@kzuraw.com',
      newsletter: 'https://buttondown.email/krzysztof_zuraw',
      twitter: 'https://twitter.com/krzysztof_zuraw',
      keybase: 'https://keybase.io/krzysztofzuraw/',
      instagram: 'https://www.instagram.com/krzysztof.zuraw.dev/',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        sitemapSize: 5000,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-plugin-webmention',
      options: {
        username: 'krzysztofzuraw.com',
        identity: {
          github: 'krzysztofzuraw',
          twitter: 'krzysztof_zuraw',
        },
        mentions: true,
        pingbacks: true,
        domain: 'krzysztofzuraw.com',
        token: 'sSJqtOQKjGYhTedoMMk-Ow',
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
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-offline',

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
              return allMarkdownRemark.edges.map((edge) => {
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
              allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit:10) {
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
  ],
};

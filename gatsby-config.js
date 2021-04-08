'use strict';

module.exports = {
  siteMetadata: {
    siteName: 'Krzysztof Żuraw',
    author: 'Krzysztof Żuraw',
    description: 'TypeScript | React | Coffee',
    siteUrl: 'https://krzysztofzuraw.com',
    keywords: 'TypeScript, React, Redux, RxJS, JavaScript',
    social: {
      github: 'https://github.com/krzysztofzuraw',
      email: 'mailto:blog@kzuraw.com',
      linkedIn: '',
      twitter: '',
    },
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://krzysztofzuraw.com`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-video`,
            options: {
              width: 650,
              muted: true,
              autoplay: true,
              height: 'auto',
              preload: 'auto',
              playsinline: true,
              controls: true,
              loop: true,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-external-links',
          'gatsby-remark-autolink-headers',
        ],
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

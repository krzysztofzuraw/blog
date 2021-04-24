'use strict';

module.exports = {
  siteMetadata: {
    siteName: 'Krzysztof Żuraw',
    author: 'Krzysztof Żuraw',
    description: 'TypeScript | React | Coffee',
    siteUrl: 'https://krzysztofzuraw.com',
    keywords: 'TypeScript, React, Redux, RxJS, JavaScript, CSS, HTML, personal blog',
    social: {
      email: 'mailto:blog@kzuraw.com',
      twitter: '@krzysztof_zuraw',
    },
    headerMenu: [
      { to: '/', name: 'Home' },
      { to: '/blog', name: 'Blog' },
    ],
    footerMenu: [
      { to: '/uses', name: 'Uses' },
      { to: '/now', name: 'Now' },
      { to: '/feeds/all.rss.xml', name: 'RSS' },
      { to: '/credits', name: 'Credits' },
    ],
    socialMenu: [
      {
        to: 'https://github.com/krzysztofzuraw',
        name: 'GitHub',
      },
      {
        to: 'https://twitter.com/krzysztof_zuraw',
        name: 'Twitter',
      },
      {
        to: 'ttps://pl.linkedin.com/in/krzysztofzuraw',
        name: 'LinkedIn',
      },
    ],
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
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
        },
      },
    },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.tsx'),
        },
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
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          },
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
                  custom_elements: [
                    {
                      'content:encoded': `
                        ${edge.node.html}
                        <p><a href=mailto:blog@kzuraw.com?subject=${encodeURI(
                          edge.node.frontmatter.title
                        )}>Reply via email</a></p>`,
                    },
                  ],
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

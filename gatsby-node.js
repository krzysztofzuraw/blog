'use strict';

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;
    const siteUrl = result.data.site.siteMetadata.siteUrl;

    posts.forEach((post) => {
      const {
        node: {
          frontmatter: { slug },
        },
      } = post;
      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug,
          permalink: slug.endsWith('.html') ? `${siteUrl}${slug}` : `${siteUrl}${slug}/`,
        },
      });
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter!
  }
  type Frontmatter {
    tags: [String!]!
    title: String!
    slug: String!
    date(
      difference: String
      formatString: String
      fromNow: Boolean
      locale: String
    ): Date!
  }

  type Site implements Node {
    siteMetadata: SiteSiteMetadata!
  }

  type SiteSiteMetadata {
    siteName: String!
    author: String!
    description: String!
    siteUrl: String!
    social: SiteSiteMetadataSocial!
    keywords: String!
    disqusName: String!
  }

  type SiteSiteMetadataSocial {
    linkedin: String!
    github: String!
    email: String!
    newsletter: String!
    instagram: String!
    twitter: String!
    keybase: String!
  }
  `;
  createTypes(typeDefs);
};

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
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      const {
        node: {
          frontmatter: { slug },
        },
      } = post;
      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug: slug,
          previous,
          next,
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
  }

  type SiteSiteMetadataSocial {
    linkedin: String!
    github: String!
    email: String!
    pinboard: String!
    newsletter: String!
  }
  `;
  createTypes(typeDefs);
};

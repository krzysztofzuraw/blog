'use strict';

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  return graphql(
    `
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
        },
      });
    });
  });
};

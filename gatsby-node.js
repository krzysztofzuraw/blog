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

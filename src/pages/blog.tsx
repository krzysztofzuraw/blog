import * as React from 'react';

import { graphql } from 'gatsby';
import { Layout, Link } from '../components';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            excerpt: string;
            id: string;
            frontmatter: {
              title: string;
              date: string;
              slug: string;
              tags: string;
            };
          };
        }
      ];
    };
  };
};

const BlogPage: React.FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>
            <h3>{node.frontmatter.title}</h3>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
          }
        }
      }
    }
  }
`;

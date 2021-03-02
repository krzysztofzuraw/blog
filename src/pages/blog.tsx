import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { Layout, Link, SEO } from '../components';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: { slug: string; title: string; date: string };
          id: string;
        };
      }>;
    };
  };
};

const BlogIndex: FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog index" />
      <h1>Blog index</h1>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>
            <span>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </span>
            <span>{node.frontmatter.date}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogListPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  }
`;

export default BlogIndex;

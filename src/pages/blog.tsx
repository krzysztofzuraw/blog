import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO } from '../components';

const BlogListPage: FunctionComponent<any> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog index" />
      <h1>Blog index</h1>
      <ul className="blog-index-list">
        {edges.map(({ node }) => (
          <li key={node.id}>
            {node.frontmatter.date} -{' '}
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogListPage;
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

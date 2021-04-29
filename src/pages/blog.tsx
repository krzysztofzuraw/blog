import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO } from '../components';

const BlogIndex: FunctionComponent<{ data: GatsbyTypes.BlogListPageQuery }> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO slug="/blog" title="Blog index" />
      <h1>Blog index</h1>
      <ul className="blog-list">
        {edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter?.slug}>{node.frontmatter?.title}</Link>
            <time dateTime={node.frontmatter?.date}>{node.frontmatter?.date}</time>
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

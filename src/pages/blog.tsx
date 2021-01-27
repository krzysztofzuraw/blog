import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Layout, SEO } from '../components';

const BlogListPage: FunctionComponent<any> = () => {
  return (
    <Layout>
      <SEO title="Blog list" />
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
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
          }
        }
      }
    }
  }
`;

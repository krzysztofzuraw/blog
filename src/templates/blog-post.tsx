import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout, SEO } from '../components';

const BlogPostPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title={'markdownRemark.frontmatter.title'} />
    </Layout>
  );
};

export default BlogPostPage;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
      }
    }
  }
`;

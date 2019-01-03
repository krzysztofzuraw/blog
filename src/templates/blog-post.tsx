import { graphql } from 'gatsby';
import * as React from 'react';

import { FilterMarkdownRemark } from 'typings/graphql';
import { BlogPost } from '../components';
import { Layout } from '../layout';

interface Props {
  data: {
    markdownRemark: FilterMarkdownRemark;
  };
}

const BlogPostTemplate: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => (
  <Layout>
    <BlogPost markdownRemark={markdownRemark} />
  </Layout>
);

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

import { graphql } from 'gatsby';
import * as React from 'react';

type Props = {
  data: any;
};

const BlogPostPage: React.FunctionComponent<Props> = () => {
  return null;
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

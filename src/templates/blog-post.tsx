import { graphql } from 'gatsby';
import * as React from 'react';

import { FilterMarkdownRemark } from 'typings/graphql';
import { BlogPost } from '../components';
import { SEOContainer } from '../containers';
import { Layout } from '../layout';

interface Props {
  data: {
    markdownRemark: FilterMarkdownRemark;
  };
}

const BlogPostTemplate: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => (
  <Layout>
    {markdownRemark.frontmatter && (
      <SEOContainer
        keywords={markdownRemark.frontmatter.tags as string[]}
        title={markdownRemark.frontmatter.title as string}
        description={markdownRemark.excerpt as string}
      />
    )}
    <div>
      <BlogPost markdownRemark={markdownRemark} />
    </div>
  </Layout>
);

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;

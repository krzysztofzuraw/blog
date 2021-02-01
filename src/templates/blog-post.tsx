import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout, SEO } from '../components';

type Props = {
  data: {
    markdownRemark: { frontmatter: { title: string; date: string }; html: string };
  };
};

const BlogPostPage: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <article>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <time>Published on {markdownRemark.frontmatter.date}</time>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </article>
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
        date(formatString: "YYYY-MM-DD")
        slug
      }
    }
  }
`;

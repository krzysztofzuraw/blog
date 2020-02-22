import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '../components';

type Props = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        tags: string[];
      };
    };
  };
};

const BlogPostPage: React.FunctionComponent<Props> = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div className="blog-meta">
        <div>{frontmatter.date}</div>
        <div>{frontmatter.tags.map(tag => `#${tag}`).join(', ')}</div>
      </div>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default BlogPostPage;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
      }
    }
  }
`;

import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout, SEO } from '../components';

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
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div className="blog-meta">
        <div>{frontmatter.date}</div>
        <div>{frontmatter.tags.map(tag => `#${tag}`).join(', ')}</div>
      </div>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <iframe
        scrolling="no"
        style={{
          width: '100%',
          height: '220px',
        }}
        title="newsletter iframe"
        src="https://buttondown.email/krzysztof_zuraw?as_embed=true"
      ></iframe>
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

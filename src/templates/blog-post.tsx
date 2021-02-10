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
      <form className="newsletter">
        <h3 className="newsletter-header">
          Want newsletter? Please subscribe below to join <code className="language-text">NaN</code>{' '}
          developers!
        </h3>
        <div className="newsletter-content">
          <div className="input-wrapper">
            <label htmlFor="email">Enter your email</label>
            <input type="email" id="email" name="email" />
          </div>
          <input type="submit" className="submit-button" />
        </div>
        <p className="credits">
          Powered by <a href="">button down</a>
        </p>
      </form>
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

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
      <hr />
      <form
        className="newsletter"
        action="https://buttondown.email/api/emails/embed-subscribe/krzysztof_zuraw"
        method="post"
        target="popupwindow"
        onSubmit={() => {
          window.open('https://buttondown.email/krzysztof_zuraw', 'popupwindow');
        }}
      >
        <h3 className="newsletter-header">
          RSS is not your thing? Subscribe to monthly newsletter istead!
        </h3>
        <div className="newsletter-content">
          <div className="input-wrapper">
            <label htmlFor="email">Enter your email</label>
            <input type="email" id="email" name="email" />
          </div>
          <input type="hidden" value="1" name="embed" />
          <input type="submit" className="submit-button" value="Subscribe" />
        </div>
        <p className="credits">
          Powered by{' '}
          <a href="https://buttondown.email" target="_blank" rel="noreferrer">
            Buttondown
          </a>
          .
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

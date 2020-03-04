import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery } from 'typings/graphql';
import { Layout, SEO } from '../components';
import '../styles/blog-post.css';
import { parseDate } from '../utils';

type Props = {
  data: BlogPostBySlugQuery;
};

const BlogPostPage: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO title={markdownRemark!.frontmatter.title} />
      <h1>{markdownRemark!.frontmatter.title}</h1>
      <div className="blog-meta">
        <div>{parseDate(markdownRemark!.frontmatter.date)}</div>
        <div>{markdownRemark!.frontmatter.tags.map(tag => `#${tag}`).join(', ')}</div>
      </div>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark!.html! }} />
      <iframe
        className="newsletter"
        scrolling="no"
        title="newsletter iframe"
        src="https://buttondown.email/krzysztof_zuraw?as_embed=true"
      ></iframe>
      <div className="comments">
        <form name="shouldIEnableComments" data-netlify="true">
          <input type="hidden" name="form-name" value="shouldIEnableComments" />
          <p>
            I'm thinking about adding comments. Would you like to leave a comment for this post?
          </p>
          <div>
            <input
              type="radio"
              id="commentsYes"
              name="commentsYes"
              value={'true'}
              aria-checked={false}
            />
            <label htmlFor="commentsYes">Yes</label>
          </div>
          <div>
            <input
              type="radio"
              id="commentsNo"
              name="commentsNo"
              value={'false'}
              aria-checked={false}
            />
            <label htmlFor="commentsNo">No</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
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

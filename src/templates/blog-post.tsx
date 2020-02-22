import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery } from 'typings/graphql';
import { Layout, SEO } from '../components';

type Props = {
  data: BlogPostBySlugQuery;
};

const BlogPostPage: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO title={markdownRemark!.frontmatter.title} />
      <h1>{markdownRemark!.frontmatter.title}</h1>
      <div className="blog-meta">
        <div>{markdownRemark!.frontmatter.date}</div>
        <div>{markdownRemark!.frontmatter.tags.map(tag => `#${tag}`).join(', ')}</div>
      </div>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark!.html! }} />
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

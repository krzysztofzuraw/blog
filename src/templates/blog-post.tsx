import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery } from 'typings/graphql';
import { Layout, Newsletter, SEO } from '../components';
import { parseDate } from '../utils';

type Props = {
  data: BlogPostBySlugQuery;
};

const BlogPostPage: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO
        title={`${markdownRemark!.frontmatter.title} | Krzysztof Żuraw`}
        description={markdownRemark?.excerpt ?? ''}
        slug={markdownRemark?.frontmatter.slug ?? ''}
      />
      <div className="blog-post">
        <h2>{markdownRemark!.frontmatter.title}</h2>
        <div>
          <div>{parseDate(markdownRemark!.frontmatter.date)}</div>
          <div>{markdownRemark!.frontmatter.tags.map((tag) => `#${tag}`).join(', ')}</div>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: markdownRemark!.html! }} />
        <hr />
      </div>
      <Newsletter />
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
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

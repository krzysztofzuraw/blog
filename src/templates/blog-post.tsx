import { css, Theme } from '@emotion/react';
import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout, SEO } from '../components';

const BlogPostPage: React.FunctionComponent<any> = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <article css={styles.article}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <time>Published on {markdownRemark.frontmatter.date}</time>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </article>
    </Layout>
  );
};

const styles = {
  article: (theme: Theme) =>
    css({
      'h1, h2, h3, h4, h5, h6, h7': {
        fontSize: '1.375rem',
        fontVariationSettings: '"wght" 600',
        marginBottom: '2rem',
      },
      h1: { '&:before': { content: '"# "' } },
      h2: { '&:before': { content: '"## "' } },
      h3: { '&:before': { content: '"### "' } },
      h4: { '&:before': { content: '"#### "' } },
      h5: { '&:before': { content: '"##### "' } },
      h6: { '&:before': { content: '"###### "' } },
      a: { color: 'inherit' },
      blockquote: {
        fontStyle: 'italic',
        color: theme.colors.blockquote,
      },
    }),
};

export default BlogPostPage;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY-mm-DD")
        slug
      }
    }
  }
`;

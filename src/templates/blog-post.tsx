import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import * as React from 'react';
import { Theme } from 'src/theme';
import { Layout, SEO, Stack } from '../components';

type Props = {
  data: {
    markdownRemark: { frontmatter: { title: string; date: string; tags: string[] }; html: string };
  };
};

const BlogPostPage: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => {
  return (
    <Layout location="blog">
      <SEO title={markdownRemark.frontmatter.title} />
      <Stack>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div css={styles.infoWrapper}>
          <time>{markdownRemark.frontmatter.date}</time>
          <ul css={styles.tagsList}>
            {markdownRemark.frontmatter.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>
        <Stack
          css={styles.article}
          as="article"
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
      </Stack>
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
  }
`;

const styles = {
  infoWrapper: (theme: Theme) =>
    css({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.base,
    }),
  tagsList: (theme: Theme) =>
    css({
      fontStyle: 'italic',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme.spacing.small,
    }),
  article: (theme: Theme) =>
    css({
      ol: { listStyle: 'decimal', paddingLeft: theme.spacing.medium },
      ul: { listStyle: 'disc', paddingLeft: theme.spacing.medium },
    }),
};

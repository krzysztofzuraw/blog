import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Theme } from 'src/theme';
import { Layout, Link, SEO, Stack } from '../components';

type Props = {
  data: any;
};

const BlogListPage: FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout location="blog">
      <SEO title="Blog list" />
      <Stack>
        <h1>Blog posts</h1>
        <Stack as="ul" space="xxlarge">
          {edges.map(({ node }: any) => (
            <Stack as="li" key={node.id}>
              <h3>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </h3>
              <div css={styles.itemInfo}>
                <time>{node.frontmatter.date}</time>
                <ul css={styles.tagsList}>
                  {node.frontmatter.tags.map((tag: any) => (
                    <li key={tag}>#{tag}</li>
                  ))}
                </ul>
              </div>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Layout>
  );
};

export default BlogListPage;
export const pageQuery = graphql`
  query BlogListPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
          }
        }
      }
    }
  }
`;

const styles = {
  itemInfo: (theme: Theme) =>
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
};

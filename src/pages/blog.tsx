import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO, mq } from '../components';

const BlogListPage: FunctionComponent<any> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog index" />
      <h1 css={styles.header}>Blog index</h1>
      <ul css={styles.list}>
        {edges.map(({ node }) => (
          <li key={node.id}>
            {node.frontmatter.date} -{' '}
            <Link to={node.frontmatter.slug} css={styles.link}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

const styles = {
  header: css({ fontSize: '1.375rem', fontWeight: 600, marginBottom: '2rem' }),
  list: css({
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }),
  link: css({ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }),
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
            date(formatString: "YYYY-MM-DD")
            slug
          }
        }
      }
    }
  }
`;

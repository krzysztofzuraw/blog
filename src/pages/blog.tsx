import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Layout, Link, Stack } from '../components';

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
      <Stack>
        <h1>Blog posts</h1>
        <Stack as="ul" space="s+4">
          {edges.map(({ node }: any) => (
            <Stack as="li" key={node.id}>
              <h3>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </h3>
              <div
                css={(theme) => ({
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: theme.spacing.s0,
                })}
              >
                <time>{node.frontmatter.date}</time>
                <ul
                  css={(theme) => ({
                    fontStyle: 'italic',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: theme.spacing['s-1'],
                  })}
                >
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
          excerpt
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

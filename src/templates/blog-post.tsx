import { graphql } from 'gatsby';
import * as React from 'react';
import { Layout, Stack } from '../components';

type Props = {
  data: any;
};

const BlogPostPage: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => {
  return (
    <Layout location="blog">
      <Stack>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          css={(theme) => ({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: theme.spacing.s0,
          })}
        >
          <time css={{ fontWeight: 200 }}>{markdownRemark.frontmatter.date}</time>
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
            {markdownRemark.frontmatter.tags.map((tag: any) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        </div>
        <Stack
          css={(theme) => ({
            ol: { listStyle: 'decimal', paddingLeft: theme.spacing['s+1'] },
            ul: { listStyle: 'disc', paddingLeft: theme.spacing['s+1'] },
          })}
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

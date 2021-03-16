import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Layout, Link, SEO } from '../components';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          frontmatter: { slug: string; title: string; date: string };
          id: string;
        };
      }>;
    };
  };
};

const BlogIndex: FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO slug="/blog" title="Blog index" />
      <h1>Blog index</h1>
      <ul className="blog-posts-list">
        {edges.map(({ node }) => (
          <li key={node.id}>
            <span>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </span>
            <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

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

export default BlogIndex;

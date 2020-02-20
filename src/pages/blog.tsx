import * as React from 'react';

import { graphql } from 'gatsby';
import { Layout, Link } from '../components';
import '../styles/blog-index.css';

type Props = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            excerpt: string;
            id: string;
            frontmatter: {
              title: string;
              date: string;
              slug: string;
              tags: string[];
            };
          };
        }
      ];
    };
  };
};

const BlogPage: React.FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <p className="rss">
        📰&nbsp;If you are looking for RSS feed with all articles it is 👉🏻 <Link>here</Link>.
      </p>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <p className="blog-meta">
              <div>{node.frontmatter.tags.map(tag => `#${tag}`).join(', ')}</div>
              <div>{node.frontmatter.date}</div>
            </p>
            <Link to={node.frontmatter.slug}>Read more ▶️</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage {
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

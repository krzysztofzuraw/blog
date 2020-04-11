import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPageQuery } from 'typings/graphql';
import { Layout, Link, SEO } from '../components';
import '../styles/blog-index.css';
import { parseDate } from '../utils';

type Props = {
  data: BlogPageQuery;
};

const BlogIndexPage: React.FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog | Krzysztof Żuraw" description="Blog index page" slug={'/blog'} />
      <p className="rss">
        📰&nbsp;If you are looking for RSS feed with all articles it is 👉🏻&nbsp;
        <Link to="/feeds/all.rss.xml">here</Link>.
      </p>
      <ul className="blog-post-list">
        {edges.map(({ node }) => (
          <li key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt! }} />
            <p className="blog-meta">
              <span>{node.frontmatter.tags.map((tag) => `#${tag}`).join(', ')}</span>
              <span>{parseDate(node.frontmatter.date)}</span>
            </p>
            <Link to={node.frontmatter.slug}>Read more ▶️</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogIndexPage;

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

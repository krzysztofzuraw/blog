import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPageQuery } from 'typings/graphql';
import { Layout, Link, SEO } from '../components';
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
      <ul className="blog-post-list">
        {edges.map(({ node }) => (
          <li key={node.id}>
            <h3>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </h3>
            <p>
              <span>{parseDate(node.frontmatter.date)}</span>
              <span>{node.frontmatter.tags.map((tag) => `#${tag}`).join(', ')}</span>
            </p>
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

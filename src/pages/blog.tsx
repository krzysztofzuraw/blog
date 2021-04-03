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
      <h1 className="text-3xl  lg:text-4xl font-extrabold mb-3 lg:mb-8">Blog index</h1>
      <ul className="grid gap-3">
        {edges.map(({ node }) => (
          <li key={node.id} className="grid lg:text-lg">
            <Link to={node.frontmatter.slug} className="hover:underline">
              {node.frontmatter.title}
            </Link>
            <time dateTime={node.frontmatter.date} className="italic">
              {node.frontmatter.date}
            </time>
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

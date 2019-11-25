import { graphql } from 'gatsby';
import * as React from 'react';

import { MarkdownRemarkFilterInput, SiteFilterInput } from 'typings/graphql';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: MarkdownRemarkFilterInput;
        }
      ];
    };
    site: SiteFilterInput;
  };
  location: Location;
}

class BlogIndex extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO title="Main" />
        {posts.map(({ node }) => (
          <Post frontmatter={node.frontmatter} excerpt={node.excerpt} key={node.id as string} />
        ))}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;

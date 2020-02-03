import { graphql } from 'gatsby';
import * as React from 'react';

import { IndexPageQuery } from 'typings/graphql';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';

interface Props {
  data: IndexPageQuery;
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
  query IndexPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
    ) {
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

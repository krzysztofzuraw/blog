import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { MarkdownRemarkFilterInput, SiteFilterInput } from 'typings/graphql';
import Bio from '../components/bio';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

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
    const siteTitle = data.site.siteMetadata!.siteName;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle as string}>
        <SEO title="Main" />
        {posts.map(({ node }) => (
          <Post frontmatter={node.frontmatter} excerpt={node.excerpt} />
        ))}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
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

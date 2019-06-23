import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { MarkdownRemarkFilterInput, SiteFilterInput } from 'typings/graphql';
import Bio from '../components/bio';
import Layout from '../components/layout';
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
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          if (node.frontmatter) {
            const title = node.frontmatter.title;
            return (
              <div key={node.frontmatter.slug as string}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.frontmatter.slug as string}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt as string,
                  }}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
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

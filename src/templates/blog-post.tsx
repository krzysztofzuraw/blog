import { graphql, Link } from 'gatsby';
import * as React from 'react';

import {
  MarkdownRemarkFilterInput,
  SiteFilterInput,
  SitePageContextFilterInput,
} from 'typings/graphql';
import Bio from '../components/bio';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';
import SEO from '../components/seo';
import '../styles/index.css';
import { rhythm, scale } from '../utils/typography';

interface Props {
  data: {
    markdownRemark: MarkdownRemarkFilterInput;
    site: SiteFilterInput;
  };
  pageContext: SitePageContextFilterInput;
  location: Location;
}

class BlogPostTemplate extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata!.siteName;
    const { previous, next } = this.props.pageContext;

    if (post.frontmatter) {
      return (
        <Layout location={this.props.location} title={siteTitle as string}>
          <SEO title={post.frontmatter.title as string} description={post.excerpt as string} />
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html! as string }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Newsletter />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Bio />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && previous.frontmatter && (
                <Link to={previous.frontmatter.slug as string} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && next.frontmatter && (
                <Link to={next.frontmatter.slug as string} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Layout>
      );
    } else {
      return null;
    }
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteName
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;

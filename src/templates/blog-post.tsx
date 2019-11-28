import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery, SitePageContextFilterInput } from 'typings/graphql';
import Bio from '../components/bio';
import { Comments } from '../components/comments';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

interface Props {
  data: BlogPostBySlugQuery;
  pageContext: SitePageContextFilterInput;
  location: Location;
}

class BlogPostTemplate extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site!.siteMetadata!.siteName;
    const siteUrl = this.props.data.site!.siteMetadata!.siteUrl;
    const { previous, next } = this.props.pageContext;

    if (post && post.frontmatter) {
      return (
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title={post.frontmatter.title || ''} description={post.excerpt} />
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-0.5),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html || '' }} />
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
          <Comments
            url={`${siteUrl}/${post.frontmatter.slug}`}
            identifier={post.id}
            title={post.frontmatter.title || ''}
          />
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
        siteUrl
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
      }
    }
  }
`;

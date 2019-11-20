import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery, SitePageContextFilterInput } from 'typings/graphql';
import Bio from '../components/bio';
import { Comments } from '../components/comments';
import Layout from '../components/layout';
import Newsletter from '../components/newsletter';
import Post from '../components/post';
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
          <Post frontmatter={post.frontmatter} html={post.html} />
          <Comments />
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

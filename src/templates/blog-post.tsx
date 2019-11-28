import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery, SitePageContextFilterInput } from 'typings/graphql';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';

interface Props {
  data: BlogPostBySlugQuery;
  pageContext: SitePageContextFilterInput;
  location: Location;
}

class BlogPostTemplate extends React.Component<Props> {
  render() {
    const post = this.props.data.markdownRemark;

    if (post && post.frontmatter) {
      return (
        <Layout>
          <SEO title={post.frontmatter.title || ''} description={post.excerpt} />
          <Post frontmatter={post.frontmatter} html={post.html} />
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

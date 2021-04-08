import { graphql } from 'gatsby';
import * as React from 'react';
import { Layout, SEO } from '../components';

const BlogPost: React.FunctionComponent<{ data: GatsbyTypes.BlogPostBySlugQuery }> = ({
  data: { markdownRemark },
}) => {
  return (
    <Layout>
      <SEO
        type="article"
        slug={markdownRemark?.frontmatter?.slug}
        title={markdownRemark?.frontmatter?.title}
        description={markdownRemark?.excerpt}
      />
      <article className="prose lg:prose-xl">
        <h1>{markdownRemark?.frontmatter?.title}</h1>
        <time dateTime={markdownRemark?.frontmatter?.date} className="italic">
          {markdownRemark?.frontmatter?.date}
        </time>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark?.html ?? '' }} />
      </article>
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        slug
      }
    }
  }
`;

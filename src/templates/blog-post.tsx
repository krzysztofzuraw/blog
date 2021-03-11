import { graphql } from 'gatsby';
import * as React from 'react';
import { Layout, SEO } from '../components';

type Props = {
  data: {
    markdownRemark: { frontmatter: { title: string; date: string }; html: string; excerpt: string };
  };
};

const BlogPost: React.FunctionComponent<Props> = ({ data: { markdownRemark } }) => {
  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} description={markdownRemark.excerpt} />
      <article className="post">
        <h1>{markdownRemark.frontmatter.title}</h1>
        <time dateTime={markdownRemark.frontmatter.date} className="italic">
          Published on {markdownRemark.frontmatter.date}
        </time>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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

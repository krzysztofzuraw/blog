import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery } from 'typings/graphql';
import { Layout, Link, Newsletter, SEO, WebMentions } from '../components';
import { parseDate } from '../utils';

type Props = {
  data: BlogPostBySlugQuery;
};

const BlogPostPage: React.FunctionComponent<Props> = ({
  data: { markdownRemark, site, allWebMentionEntry },
}) => {
  return (
    <Layout>
      <SEO
        title={`${markdownRemark!.frontmatter.title} | Krzysztof Żuraw`}
        description={markdownRemark?.excerpt ?? ''}
        slug={markdownRemark?.frontmatter.slug ?? ''}
      />
      <div className="blog-post">
        <h2 className="p-name">{markdownRemark!.frontmatter.title}</h2>
        <div>
          <div>{parseDate(markdownRemark!.frontmatter.date)}</div>
          <div>{markdownRemark!.frontmatter.tags.map((tag) => `#${tag}`).join(', ')}</div>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: markdownRemark!.html! }} className="e-content" />
        <Link
          to={`${site?.siteMetadata.siteUrl}${markdownRemark?.frontmatter.slug}`}
          className="u-url hidden"
        />
        <Link to="https://krzysztofzuraw.com" className="p-author h-card hidden">
          Krzysztof Żuraw
        </Link>
        <time className="dt-published hidden" dateTime={markdownRemark!.frontmatter.date}>
          {new Date(markdownRemark!.frontmatter.date).toISOString().replace('Z', '') + '+01:00'}
        </time>
        <hr />
      </div>
      <Newsletter />
      <WebMentions data={allWebMentionEntry} />
    </Layout>
  );
};

export default BlogPostPage;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $permalink: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
      }
    }
    allWebMentionEntry(filter: { wmTarget: { eq: $permalink } }) {
      edges {
        ...WebMentionInformation
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

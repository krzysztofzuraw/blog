import { graphql } from 'gatsby';
import * as React from 'react';

import { BlogPostBySlugQuery } from 'typings/graphql';
import { Layout, Link, SEO, WebMentions } from '../components';
import '../styles/blog-post.css';
import { parseDate } from '../utils';

type Props = {
  data: BlogPostBySlugQuery;
};

const BlogPostPage: React.FunctionComponent<Props> = ({ data: { markdownRemark, site } }) => {
  return (
    <Layout>
      <SEO
        title={`${markdownRemark!.frontmatter.title} | Krzysztof Żuraw`}
        description={markdownRemark?.excerpt ?? ''}
        slug={markdownRemark?.frontmatter.slug ?? ''}
      />
      <article className="h-entry">
        <h1 className="p-name">{markdownRemark!.frontmatter.title}</h1>
        <div className="blog-meta">
          <div>{parseDate(markdownRemark!.frontmatter.date)}</div>
          <div>{markdownRemark!.frontmatter.tags.map((tag) => `#${tag}`).join(', ')}</div>
        </div>
        <hr></hr>
        <div className="e-content" dangerouslySetInnerHTML={{ __html: markdownRemark!.html! }} />
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
      </article>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/krzysztof_zuraw"
        method="post"
        target="popupwindow"
        onSubmit={() =>
          window && window.open('https://buttondown.email/krzysztof_zuraw', 'popupwindow')
        }
        className="newsletter"
      >
        <label htmlFor="bd-email">Enter your email to subscribe to monthly newsletter</label>
        <div>
          <input
            className="email"
            type="email"
            name="email"
            id="bd-email"
            placeholder="Your email address"
          />
          <input type="hidden" value="1" name="embed"></input>
          <input className="button" type="submit" value="Subscribe"></input>
        </div>
        <p>
          <a href="https://buttondown.email" target="_blank">
            Powered by Buttondown
          </a>
        </p>
      </form>
      <WebMentions />
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
    webMentionEntry(wmTarget: { eq: $permalink }) {
      ...WebMentionInformation
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

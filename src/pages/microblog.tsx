import { graphql } from 'gatsby';
import * as React from 'react';

import { MicroblogIndexPageQuery } from 'typings/graphql';
import Layout from '../components/layout';
import Link from '../components/link';
import SEO from '../components/seo';

import style from '../styles/micropost.module.css';

type Props = {
  data: MicroblogIndexPageQuery;
};

const MicroblogIndex: React.FunctionComponent<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Microblog" />
      {posts.map(post => (
        <div key={post.node.id} className={style.entry} id={post.node.frontmatter?.title ?? ''}>
          <h1 className={`${style.title} post-link`}>
            <Link to={`#${post.node.frontmatter?.title}`}>{post.node.frontmatter?.title}</Link>
          </h1>
          <div className={style.meta}>{post.node.frontmatter?.date}</div>
          <div dangerouslySetInnerHTML={{ __html: post.node.html ?? '' }} />
          {post.node.frontmatter?.twitter && (
            <div className={style.meta}>
              <a href={post.node.frontmatter?.twitter}>Twitter link</a>
            </div>
          )}
        </div>
      ))}
    </Layout>
  );
};

export default MicroblogIndex;

export const pageQuery = graphql`
  query MicroblogIndexPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { sourceInstanceName: { eq: "microblog" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            twitter
            tags
          }
        }
      }
    }
  }
`;

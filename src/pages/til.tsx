import { graphql } from 'gatsby';
import * as React from 'react';
import { TilPageQuery } from 'typings/graphql';
import { Layout, Link } from '../components';
import { parseDate } from '../utils';

type Props = {
  data: TilPageQuery;
};

const TodayILearnedPage: React.FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <p>Welcome to today I learned (TIL) page. You can find here small tips & tricks I learned.</p>
      <ul className="blog-post-list">
        {edges.map(({ node }) => (
          <li key={node.id}>
            <h4>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </h4>
            <p>
              <span>{parseDate(node.frontmatter.date)}</span>
              <span>
                {node.frontmatter.tags
                  .filter((tag) => tag !== 'til')
                  .map((tag) => `#${tag}`)
                  .join(', ')}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TodayILearnedPage;

export const pageQuery = graphql`
  query TILPage {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: "til" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
          }
        }
      }
    }
  }
`;

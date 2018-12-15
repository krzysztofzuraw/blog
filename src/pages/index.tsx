import { graphql } from 'gatsby';
import * as React from 'react';

import { FilterMarkdownRemark } from 'typings/graphql';
import { List } from '../components';
import { Layout } from '../layout';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: FilterMarkdownRemark;
        }
      ];
    };
  };
}

const IndexPage: React.FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <List>
        {edges.map(edge => (
          <List.Item key={edge.node.id as string} frontmatter={edge.node.frontmatter} />
        ))}
      </List>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;

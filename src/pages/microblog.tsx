import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const MicroblogIndex: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Microblog" />
      <div>Working</div>
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
          excerpt
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

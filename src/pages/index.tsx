import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';

const IndexPage: FunctionComponent = () => {
  return <div>Werks</div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

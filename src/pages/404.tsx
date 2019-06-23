import { graphql } from 'gatsby';
import * as React from 'react';

import { SiteFilterInput } from 'typings/graphql';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/index.css';

interface Props {
  data: {
    site: SiteFilterInput;
  };
  location: Location;
}

class NotFoundPage extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata!.siteName;

    return (
      <Layout location={this.props.location} title={siteTitle as string}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

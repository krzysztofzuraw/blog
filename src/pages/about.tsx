import * as React from 'react';

import { AboutContainer, SEOContainer } from '../containers';
import { Layout } from '../layout';

const AboutPage: React.FunctionComponent = () => (
  <Layout>
    <SEOContainer />
    <AboutContainer />
  </Layout>
);

export default AboutPage;

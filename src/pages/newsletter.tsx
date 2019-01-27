import * as React from 'react';

import { Newsletter } from '../components';
import { SEOContainer } from '../containers';
import { Layout } from '../layout';

const handleFormSubmit = () =>
  window.open('https://buttondown.email/krzysztof_zuraw', 'popupwindow');

const NewsletterPage: React.FunctionComponent = () => (
  <Layout>
    <SEOContainer />
    <Newsletter
      handleFormSubmit={handleFormSubmit}
      formAction="https://buttondown.email/api/emails/embed-subscribe/krzysztof_zuraw"
    />
  </Layout>
);

export default NewsletterPage;

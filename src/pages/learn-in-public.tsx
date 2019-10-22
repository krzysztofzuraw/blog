import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/index.css';

interface Props {
  location: Location;
}

const LearnInPublicPage: React.FC<Props> = ({ location }) => (
  <Layout location={location} title="Learning in public">
    <SEO title="Learning in public" />

    <div>
      <p>Inspired by learn in public blog post I decided to create my own page for that purpose.</p>
      <p>Mindframing:</p>
      <ul>
        <li>Pact: I decicate time (1h15min x5 per week) to make progess in learning in public</li>
        <li>Things I'm currently learning in public: </li>
        <li>TypeScript</li>
        <li>React</li>
        <p>
          My sucess critera: help others by writing 52 articles (either blog & today I Learned
          entries) from TypeScript + React; have impact on one person
        </p>
        <p>Time spent progress:</p>
        <li>Act: </li>
        https://nesslabs.com/mindframing
      </ul>
    </div>
  </Layout>
);

export default LearnInPublicPage;

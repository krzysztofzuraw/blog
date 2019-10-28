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
      <p>
        I picked <a href="https://nesslabs.com/mindframing">mindframing</a> framework.
      </p>
      <ol>
        <li>
          <p>Pact: </p>
          <p>I decicate time (1h15min x5 per week) to make progess in learning in public</p>
          <p>What I'm currently learning in public:</p>
          <ul>
            <li>TypeScript</li>
            <li>React</li>
          </ul>
          <p>My sucess critera:</p>
          <ul>
            <li>
              help others by writing 52 articles (either blog and today I learned entries) from
              TypeScript + React (0/52)
            </li>
            <li>have impact on one person (0/1)</li>
          </ul>
          <p>Time spent progress: </p>
          <ul>
            <li>21.10.2019 - 27.10.2019 - 5h</li>
          </ul>
        </li>
        <li>
          <p>Act and react:</p>
          <ul>
            <li>
              <a href="https://krzysztofzuraw.com/blog/2019/xstate-inputs-react">
                Blog: xstate + react
              </a>
            </li>
          </ul>
        </li>
        <li>
          <p>Impact</p>
        </li>
      </ol>
    </div>
  </Layout>
);

export default LearnInPublicPage;

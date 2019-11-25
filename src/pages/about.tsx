import { Link } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="About" />
    <div>
      <h1>Hello!</h1>
      <p>
        My name is <strong>Krzysztof Żuraw</strong>. I'm currently working at{' '}
        <a href="https://www.ingrid.com">Ingrid</a> as a frontend developer and a team leader.
      </p>
      <p>
        Right now I'm doing frontend work with TypeScript, React, Redux and RxJS. Previously I was
        working with Python (mainly Django framework).
      </p>
      <p>
        If I'm not coding I like to brew good coffee with Chemex or Areopress. You can find me also
        in various food spots (tasty ones) around Wrocław.
      </p>
      <p>
        I also like giving back to community so I was a few times mentor on Django Grils (Wrocław &
        Kraków). I teach Python at Code Geeks Carrots Wrocław. I'm coorganizer of Wrocław TypeScript
        meetup.
      </p>
      <p>
        If you are interested in knowing what im currently learning I have learning in public{' '}
        <Link to="/learn-in-public">page</Link>.
      </p>
      <p>
        You can find my code at <a href="https://github.com/krzysztofzuraw">GitHub</a>. My talks at{' '}
        <a href="https://speakerdeck.com/krzysztofzuraw">Speakers Deck</a>. I have{' '}
        <a href="https://pl.linkedin.com/in/krzysztofzuraw">LinkedIn</a> profile too. If you want
        you can <a href="mailto:noaaln@fastmail.com">write to me</a> or follow at{' '}
        <a href="https://twitter.com/krzysztof_zuraw">Twitter</a>.
      </p>
    </div>
  </Layout>
);

export default AboutPage;

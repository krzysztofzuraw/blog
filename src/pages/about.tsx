import { Link } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ textAlign: 'left' }}>
      <p>
        My name is <strong>Krzysztof Żuraw</strong>. I'm currently working at{' '}
        <a href="https://www.ingrid.com">Ingrid</a> as a frontend developer and a team leader.
      </p>
      <p>
        Right now I'm doing carrier change from frontend developer to frontend developer + designer.
        I enjoy working with TypeScript, React, Redux and RxJS. Previously I was working with Python
        (mainly Django framework).
      </p>
      <p>
        If I'm not coding I like to brew good coffee with Chemex or Areopress. You can find me also
        in various food spots (tasty ones) around Wrocław.
      </p>
      <p>
        I also like giving back to community so I was a few times mentor on Django Girls (
        <a href="https://djangogirls.org/wroclaw/">Wrocław</a> & Kraków). I teach Python at Code
        Geeks Carrots Wrocław. I'm coorganizer of{' '}
        <a href="https://www.meetup.com/WrocTypeScript">Wrocław TypeScript meetup</a>.
      </p>
      <div>
        <p>My profiles on the internet:</p>
        <p>GitHub</p>
        <p>Speakers Deck</p>
        <p>LinkedIn</p>
        <p>Mail</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Makerlog</p>
        You can find my code at <a href="https://github.com/krzysztofzuraw">GitHub</a>. My talks at{' '}
        <a href="https://speakerdeck.com/krzysztofzuraw">Speakers Deck</a>. I have{' '}
        <a href="https://pl.linkedin.com/in/krzysztofzuraw">LinkedIn</a> profile too. If you want
        you can <a href="mailto:blog@kzuraw.com">write to me</a> or follow at{' '}
        <a href="https://twitter.com/krzysztof_zuraw">Twitter</a>.
      </div>
      <div>
        <p>Makerlog profile</p>
        <iframe
          title="Makerlog Embed"
          height="200"
          style={{ width: '100%' }}
          scrolling="no"
          frameBorder="0"
          src="https://api.getmakerlog.com/users/4113/stats_embed"
        ></iframe>
      </div>
    </div>
  </Layout>
);

export default AboutPage;

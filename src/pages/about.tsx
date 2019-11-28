import * as React from 'react';

import Layout from '../components/layout';
import Link from '../components/link';
import SEO from '../components/seo';

const AboutPage: React.FunctionComponent = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ textAlign: 'left' }}>
      <p>
        My name is <strong>Krzysztof Żuraw</strong>. I'm currently working at{' '}
        <Link to="https://www.ingrid.com">Ingrid</Link> as a frontend developer and a team leader.
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
        <Link to="https://djangogirls.org/wroclaw/">Wrocław</Link> & Kraków). I teach Python at Code
        Geeks Carrots Wrocław. I'm coorganizer of{' '}
        <Link to="https://www.meetup.com/WrocTypeScript">Wrocław TypeScript meetup</Link>.
      </p>
      <div>
        <p>My profiles on the internet</p>
        <p>
          <Link to="https://github.com/krzysztofzuraw">GitHub</Link>
        </p>
        <p>
          <Link to="https://speakerdeck.com/krzysztofzuraw">Speakers Deck</Link>
        </p>
        <p>
          <Link to="https://pl.linkedin.com/in/krzysztofzuraw">LinkedIn</Link>
        </p>
        <p>
          <Link to="mailto:blog@kzuraw.com">Mail</Link>
        </p>
        <p>
          <Link to="https://twitter.com/krzysztof_zuraw">Twitter</Link>
        </p>
        <p>
          <Link to="https://www.instagram.com/krzysztofzuraw/">Instagram</Link>
        </p>
        <p>
          <Link to="https://getmakerlog.com/@krzysztof_zuraw">Makerlog</Link>
        </p>
      </div>
    </div>
  </Layout>
);

export default AboutPage;

import * as React from 'react';

import { graphql } from 'gatsby';
import { Layout, Link } from '../components';

type Props = {
  data: {
    site: {
      siteMetadata: {
        social: {
          email: string;
          linkedin: string;
          github: string;
          pinboard: string;
          newsletter: string;
        };
      };
    };
  };
};

const IndexPage: React.FunctionComponent<Props> = ({
  data: {
    site: {
      siteMetadata: { social },
    },
  },
}) => {
  return (
    <Layout>
      <h3>Hello 👋🏻</h3>
      <p>
        Welcome to my personal site. I'm self-taught frontend developer. I enjoy working with
        TypeScript, React, Redux and RxJs. Previously I was working with Python (mainly Django
        framework). You can find my projects on <Link to={social.github}>github</Link> and tools
        on&nbsp; <Link to="/uses">uses</Link> page. I have LinkedIn&nbsp;
        <Link to={social.linkedin}>too</Link>.
      </p>
      <p>
        If I'm not coding I like to brew good coffee with Chemex or Areopress. You can find me also
        in various food spots (tasty ones) around Wrocław. I also like giving back to community so I
        was a few times mentor on Django Girls (Wrocław & Kraków). I used to teach Python at Code
        Geeks Carrots Wrocław.
      </p>
      <p>
        I like to organize things. I'm coorganizer of&nbsp;
        <Link to="https://www.meetup.com/pl-PL/WrocTypeScript/">Wrocław TypeScript meetup</Link>.
        I'm helping to organize&nbsp;
        <Link to="https://djangogirls.org/wroclaw/">Django Girls Wrocław</Link>. If you need a place
        & help with organizing do not hesitate to contact me (email is on the footer).
      </p>
      <p>
        I have monthly <Link to={social.newsletter}>newsletter</Link>. Other than that I have&nbsp;
        <Link to={social.pinboard}>pinboard</Link> account where I keep interesting links.
      </p>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        social {
          email
          linkedin
          github
          pinboard
          newsletter
        }
      }
    }
  }
`;

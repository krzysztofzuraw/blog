import { graphql } from 'gatsby';
import * as React from 'react';
import { IndexPageQuery } from 'typings/graphql';

import { Layout, Link, SEO } from '../components';

type Props = {
  data: IndexPageQuery;
};

const IndexPage: React.FunctionComponent<Props> = ({ data: { site } }) => {
  return (
    <Layout>
      <SEO
        title={`Krzysztof Żuraw | ${site?.siteMetadata.description}`}
        description="Main page"
        slug={''}
      />
      <div>
        Welcome to my personal site. I'm self-taught frontend developer who is currently learning
        design. I enjoy working with TypeScript + React.
      </div>
      <p>
        If I'm not coding I like to brew some good coffee with Chemex or Aeropress. You can also
        find me in various food spots (tasty ones) around Wrocław. I also like giving back to
        community so a few times I was a mentor on Django Girls (Wrocław & Kraków) and used to teach
        Python at Code Geeks Carrots Wrocław (where I met my lovely girlfriend).
      </p>
      <p>
        I like to organize things. I'm coorganizer of&nbsp;
        <Link to="https://www.meetup.com/pl-PL/WrocTypeScript/">Wrocław TypeScript meetup</Link>.
        I'm helping in coordination of&nbsp;
        <Link to="https://djangogirls.org/wroclaw/">Django Girls Wrocław</Link>. If you need a place
        & help with preparing some event do not hesitate to contact me (email is on the footer).
      </p>
    </Layout>
  );
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

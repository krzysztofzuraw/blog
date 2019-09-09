import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import * as React from 'react';

import { rhythm } from '../utils/typography';

const Bio: React.FunctionComponent = () => {
  const data = useStaticQuery<any>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site!.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar!.childImageSharp!.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in Wrocław.
        {` `}
        You can find more on <Link to="/about">about</Link> page and subscribe to{' '}
        <Link to="/feeds/all.rss.xml">rss</Link> feed.
      </p>
    </div>
  );
};

export default Bio;

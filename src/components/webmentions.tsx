import { graphql } from 'gatsby';
import * as React from 'react';

export const WebMentions: React.FunctionComponent = () => {
  return <div>Working!!!</div>;
};

export const query = graphql`
  fragment WebMentionInformation on WebMentionEntry {
    wmTarget
    wmSource
    wmProperty
    wmId
    type
    url
    likeOf
    author {
      url
      type
      photo
      name
    }
    content {
      text
    }
  }
`;

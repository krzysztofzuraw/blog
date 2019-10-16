import JustComments from 'gatsby-plugin-just-comments';
import * as React from 'react';

// https://just-comments.com/blog/2019-07-30-adding-comments-to-gatsby-js.html
export const Comments: React.FunctionComponent = () => (
  <JustComments apikey="0c229e81-575d-47a7-a698-856d3876aaf2" />
);

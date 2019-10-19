import JustComments from 'gatsby-plugin-just-comments';
import * as React from 'react';
import { rhythm } from '../utils/typography';

export const Comments: React.FunctionComponent = () => {
  const [showComments, changeShowComments] = React.useState(false);
  if (showComments) {
    return <JustComments apikey="0c229e81-575d-47a7-a698-856d3876aaf2" locale="en_US" />;
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: rhythm(1),
      }}
    >
      <button
        style={{
          backgroundColor: '#63B3ED',
          borderRadius: '0.25em',
          color: '#fff',
          padding: '0.75em 1em',
          fontSize: '16px',
        }}
        onClick={() => changeShowComments(true)}
      >
        Load comments
      </button>
    </div>
  );
};

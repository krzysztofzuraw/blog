import * as React from 'react';

export const Newsletter: React.FunctionComponent = () => (
  <iframe
    scrolling="no"
    style={{
      width: '100%',
      height: '220px',
    }}
    title="newsletter iframe"
    src="https://buttondown.email/krzysztof_zuraw?as_embed=true"
  ></iframe>
);

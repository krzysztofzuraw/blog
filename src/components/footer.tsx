import * as React from 'react';

interface Props {
  discussUrl: string;
}

const Footer: React.FunctionComponent<Props> = ({ discussUrl }) => (
  <footer>
    <p>
      <a href={discussUrl} target="_blank" rel="noopener noreferrer">
        Discuss on Twitter
      </a>
    </p>
  </footer>
);

export default Footer;

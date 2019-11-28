import * as React from 'react';

import Link from './link';

const Footer: React.FunctionComponent = () => (
  <footer>
    <span className="footerCopyrights">
      © 2019 Built with <Link to="https://www.gatsbyjs.org">Gatsby</Link>
    </span>
    <span className="footerCopyrights">
      Theme based on <Link to="https://gatsby-hello-friend.now.sh/">gatsby hello friend </Link>by{' '}
      <Link to="https://radoslawkoziel.pl">panr</Link>
    </span>
  </footer>
);

export default Footer;

import * as React from 'react';

import { Link } from '.';

export const Nav: React.FunctionComponent = () => (
  <nav>
    <h1 title="Krzysztof Żuraw">Krzysztof Żuraw</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/now">Now</Link>
      </li>
      <li>
        <Link to="/uses">Uses</Link>
      </li>
    </ul>
  </nav>
);

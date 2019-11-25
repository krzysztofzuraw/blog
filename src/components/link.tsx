import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import * as React from 'react';

const Link: React.FunctionComponent<Omit<GatsbyLinkProps<{}>, 'ref'>> = ({
  to,
  children,
  ...restProps
}) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <GatsbyLink to={to} {...restProps}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...restProps}>
      {children}
    </a>
  );
};

export default Link;

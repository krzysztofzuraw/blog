import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React, { FunctionComponent } from 'react';

export const Link: FunctionComponent<Omit<GatsbyLinkProps<unknown>, 'ref'>> = ({
  to,
  children,
  ...restProps
}) => {
  const isInternal = /^\/(?!\/)/.test(to);
  if (isInternal) {
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

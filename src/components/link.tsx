import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import * as React from 'react';

export const Link: React.FunctionComponent<Omit<GatsbyLinkProps<{}>, 'ref'>> = ({
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
    <OutboundLink href={to} {...restProps}>
      {children}
    </OutboundLink>
  );
};

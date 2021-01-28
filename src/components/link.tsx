import { css } from '@emotion/react';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React, { FunctionComponent } from 'react';

export const Link: FunctionComponent<Omit<GatsbyLinkProps<{}>, 'ref'>> = ({
  to,
  children,
  ...restProps
}) => {
  const internal = /^\/(?!\/)/.test(to);
  if (internal) {
    return (
      <GatsbyLink to={to} {...restProps} css={styles.link}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a href={to} {...restProps} css={styles.link}>
      {children}
    </a>
  );
};

const styles = {
  link: css({ color: 'inherit' }),
};

import { css } from '@emotion/core';
import React, { FunctionComponent } from 'react';
import { Link } from '.';
import { BlogTheme, Theme } from '../theme';

type Props = {
  location: 'home' | 'about' | 'blog' | 'uses' | 'projects' | 'now';
};

export const Layout: FunctionComponent<Props> = ({ children, location }) => (
  <BlogTheme>
    <div css={styles.wrapper}>
      <header css={styles.header}>
        <div>
          <Link to="/" css={{ textDecoration: location === 'home' ? 'none' : 'inital' }}>
            Krzysztof Żuraw
          </Link>
        </div>
        <nav>
          <ul css={styles.menu}>
            <li>
              <Link to="/about" css={styles.link({ dontShowLinkDecor: location === 'about' })}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" css={styles.link({ dontShowLinkDecor: location === 'blog' })}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/feeds/all.rss.xml">RSS</Link>
            </li>
            <li>
              <Link to="https://buttondown.email/krzysztof_zuraw">Newsletter</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main css={styles.content}>{children}</main>
      <footer css={styles.footer}>
        © 2016-{new Date().getFullYear()} <Link to="mailto:blog@kzuraw.com">Krzysztof Żuraw</Link>.
        Built with Gatsby.
      </footer>
    </div>
  </BlogTheme>
);

const styles = {
  wrapper: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: spacing.base,
      '> * ': {
        marginTop: spacing.base,
        marginBottom: spacing.base,
      },
      '> :first-child:not(main)': {
        marginTop: 0,
      },
      '> :last-child:not(main)': {
        marginBottom: 0,
      },
    }),
  header: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontWeight: 600,
      li: {
        marginRight: spacing.small,
      },
    }),
  link: ({ dontShowLinkDecor }: { dontShowLinkDecor: boolean }) =>
    css({
      textDecoration: dontShowLinkDecor ? 'none' : 'inital',
    }),
  menu: ({ spacing }: Theme) =>
    css({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: spacing.base,
    }),
  content: ({ measure }: Theme) =>
    css({
      marginTop: 'auto',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: measure,
    }),
  footer: css({ alignSelf: 'center' }),
};

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
            <Link to="/projects" css={styles.link({ dontShowLinkDecor: location === 'projects' })}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/now" css={styles.link({ dontShowLinkDecor: location === 'now' })}>
              Now
            </Link>
          </li>
          <li>
            <Link to="/uses" css={styles.link({ dontShowLinkDecor: location === 'uses' })}>
              Uses
            </Link>
          </li>
          <li>
            <a href="/feeds/all.rss.xml">RSS</a>
          </li>
          <li>
            <a href="https://buttondown.email/krzysztof_zuraw">Newsletter</a>
          </li>
          <li>
            <a href="https://github.com/krzysztofzuraw">Github</a>
          </li>
        </ul>
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
    ({
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: spacing.s0,
      '> * ': {
        marginTop: spacing.s0,
        marginBottom: spacing.s0,
      },
      '> :first-child:not(main)': {
        marginTop: 0,
      },
      '> :last-child:not(main)': {
        marginBottom: 0,
      },
    } as const),
  header: ({ spacing }: Theme) =>
    ({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: spacing.s0,
      justifyContent: 'space-between',
      fontWeight: 600,
    } as const),
  link: ({ dontShowLinkDecor }: { dontShowLinkDecor: boolean }) => ({
    textDecoration: dontShowLinkDecor ? 'none' : 'inital',
  }),
  menu: ({ spacing }: Theme) =>
    ({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: spacing.s0,
    } as const),
  content: ({ measure }: Theme) => ({
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: measure,
  }),
  footer: { alignSelf: 'center' },
};

import React, { FunctionComponent } from 'react';
import { Link } from '.';
import { BlogTheme } from '../theme';

type Props = {
  location: 'home' | 'about' | 'blog' | 'uses' | 'projects' | 'now';
};

export const Layout: FunctionComponent<Props> = ({ children, location }) => (
  <BlogTheme>
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: theme.spacing.s0,
        '> * ': {
          marginTop: theme.spacing.s0,
          marginBottom: theme.spacing.s0,
        },
        '> :first-child:not(main)': {
          marginTop: 0,
        },
        '> :last-child:not(main)': {
          marginBottom: 0,
        },
      })}
    >
      <header
        css={(theme) => ({
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: theme.spacing.s0,
          justifyContent: 'space-between',
          fontWeight: 600,
        })}
      >
        <div>
          <Link to="/" css={{ textDecoration: location === 'home' ? 'none' : 'inital' }}>
            Krzysztof Żuraw
          </Link>
        </div>
        <ul
          css={(theme) => ({
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: theme.spacing.s0,
          })}
        >
          <li>
            <Link to="/about" css={{ textDecoration: location === 'about' ? 'none' : 'inital' }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" css={{ textDecoration: location === 'blog' ? 'none' : 'inital' }}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="" css={{ textDecoration: location === 'projects' ? 'none' : 'inital' }}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/now" css={{ textDecoration: location === 'now' ? 'none' : 'inital' }}>
              Now
            </Link>
          </li>
          <li>
            <Link to="/uses" css={{ textDecoration: location === 'uses' ? 'none' : 'inital' }}>
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
      <main
        css={(theme) => ({
          marginTop: 'auto',
          marginBottom: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: theme.measure,
        })}
      >
        {children}
      </main>
      <footer css={{ alignSelf: 'center' }}>Footer 2020</footer>
    </div>
  </BlogTheme>
);

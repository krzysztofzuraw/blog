import React, { FunctionComponent } from 'react';
import { Link } from '.';
import { BlogTheme } from '../theme';

type Props = {
  location: 'home' | 'about' | 'blog';
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
            <a href="">RSS</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
          <li>
            <a href="">Now</a>
          </li>
          <li>
            <a href="">Projects</a>
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

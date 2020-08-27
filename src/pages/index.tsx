import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { BlogTheme } from '../theme';
import { css } from '@emotion/core';

const IndexPage: FunctionComponent = () => {
  return (
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
          <div>Krzysztof Żuraw</div>
          <ul
            css={(theme) => ({
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: theme.spacing.s0,
            })}
          >
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
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
          css={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <h1>Welcome, I'm Krzysztof Żuraw 👋🏻</h1>
          <h2>Frontend Developer living in Wrocław</h2>
        </main>
        <footer css={{ alignSelf: 'center' }}>Footer 2020</footer>
      </div>
    </BlogTheme>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

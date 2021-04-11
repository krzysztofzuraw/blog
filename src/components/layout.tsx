import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Link } from './link';

const Layout: FunctionComponent = ({ children }) => {
  const { site } = useStaticQuery<GatsbyTypes.LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          headerMenu {
            to
            name
          }
          footerMenu {
            to
            name
          }
          socialMenu {
            to
            name
          }
          social {
            email
          }
        }
      }
    }
  `);

  return (
    <div className="layout">
      <header>
        <ul>
          {site?.siteMetadata?.headerMenu?.map((link, idx) => (
            <li key={`${link?.name}-${idx}`}>
              <Link to={link?.to}>{link?.name}</Link>
            </li>
          ))}
        </ul>
      </header>
      {children}
      <footer>
        <ul>
          {site?.siteMetadata?.footerMenu?.map((link, idx) => (
            <li key={`${link?.name}-${idx}`}>
              <Link to={link?.to}>{link?.name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          {site?.siteMetadata?.socialMenu?.map((link, idx) => (
            <li key={`${link?.name}-${idx}`}>
              <Link to={link?.to}>{link?.name}</Link>
            </li>
          ))}
        </ul>
        <p>
          © 2016-{new Date().getFullYear()}{' '}
          <Link to={site?.siteMetadata?.social?.email}>Krzysztof Żuraw</Link>
        </p>
      </footer>
    </div>
  );
};

export default Layout;

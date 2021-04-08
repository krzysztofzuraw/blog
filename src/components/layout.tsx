import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { Link } from './link';

export const Layout: FunctionComponent = ({ children }) => {
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
    <div className="mx-auto max-w-3xl grid h-screen px-4 py-10 gap-6">
      <header className="flex justify-end">
        <ul className="flex gap-2 font-bold lg:text-lg">
          {site?.siteMetadata?.headerMenu?.map((link, idx) => (
            <li className="hover:underline" key={`${link?.name}-${idx}`}>
              <Link to={link?.to}>{link?.name}</Link>
            </li>
          ))}
        </ul>
      </header>
      {children}
      <footer className="grid lg:text-lg grid-cols-3 border-gray-200 border-t-2 py-2">
        <ul>
          {site?.siteMetadata?.footerMenu?.map((link, idx) => (
            <li className="hover:underline" key={`${link?.name}-${idx}`}>
              <Link to={link?.to}>{link?.name}</Link>
            </li>
          ))}
        </ul>
        <ul>
          {site?.siteMetadata?.socialMenu?.map((link, idx) => (
            <li className="hover:underline" key={`${link?.name}-${idx}`}>
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

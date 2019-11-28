import { Link } from 'gatsby';
import * as React from 'react';

import '../styles/layout.css';
import { rhythm, scale } from '../utils/typography';

import { Header } from './header';

interface Props {
  location: Location;
  title?: string | null;
}

// class Layout extends React.Component<Props> {
//   render() {
//     const { location, title, children } = this.props;
//     let header;

//     if (location.pathname === '/') {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h1>
//       );
//     } else {
//       header = (
//         // tslint:disable-next-line: react-a11y-accessible-headings
//         <h3
//           style={{
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h3>
//       );
//     }
//     return (
//       <>
//         <div style={{ height: '6px', backgroundColor: '#63B3ED' }}></div>
//         <div
//           style={{
//             marginLeft: `auto`,
//             marginRight: `auto`,
//             maxWidth: rhythm(29),
//             padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//           }}
//         >
//           <header>{header}</header>
//           <main>{children}</main>
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//         </div>
//       </>
//     );
//   }
// }

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;

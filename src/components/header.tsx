import { Link } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Menu } from './menu';

import style from '../styles/header.module.css';

export const Header: React.FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <body className={'dark-theme'} />
      </Helmet>
      <header className={style.header}>
        <div className={style.inner}>
          <Link to="/">
            <div className={style.logo}>
              <span className={style.mark}>></span>
              <span className={style.text}>Krzysztof Żuraw</span>
              <span className={style.cursor} />
            </div>
          </Link>
          <span className={style.right}>
            <Menu />
          </span>
        </div>
      </header>
    </>
  );
};

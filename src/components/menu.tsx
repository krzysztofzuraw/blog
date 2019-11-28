import * as React from 'react';

import { Icon } from './icon';
import Link from './link';

import style from '../styles/menu.module.css';

const menuIcon = `M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z`;

const menuEntries = [
  { path: '/about', title: 'About' },
  { path: '/projects', title: 'Projects' },
  { path: 'https://buttondown.email/krzysztof_zuraw', title: 'Newsletter' },
  { path: '/feeds/all.rss.xml', title: 'RSS' },
];

const MainMenu: React.FunctionComponent<{ isMobileMenuVisible: boolean }> = ({
  isMobileMenuVisible,
}) => {
  return (
    <>
      {menuEntries.slice(0, isMobileMenuVisible ? menuEntries.length : 2).map((menuItem, index) => (
        <li key={index}>
          <Link to={menuItem.path}>{menuItem.title}</Link>
        </li>
      ))}
    </>
  );
};

const SubMenu: React.FunctionComponent<{ onToggleSubMenu: any }> = ({ onToggleSubMenu }) => {
  return (
    <>
      {menuEntries.slice(2, menuEntries.length).map((menuItem, index) => (
        <li key={index}>
          <Link to={menuItem.path}>{menuItem.title}</Link>
        </li>
      ))}
      <div className={style.subMenuOverlay} role="button" tabIndex={0} onClick={onToggleSubMenu} />
    </>
  );
};

export const Menu: React.FunctionComponent = () => {
  const [isMobileMenuVisible, toggleMobileMenu] = React.useState(false);
  const [isSubMenuVisible, toggleSubMenu] = React.useState(false);

  const onToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuVisible);
  const onToggleSubMenu = () => toggleSubMenu(!isSubMenuVisible);

  return (
    <>
      <div className={style.mobileMenuContainer}>
        <>
          {isMobileMenuVisible ? (
            <>
              <ul className={style.mobileMenu}>
                <MainMenu isMobileMenuVisible={isMobileMenuVisible} />
              </ul>
              <div onClick={onToggleMobileMenu} className={style.mobileMenuOverlay} role="button" />
            </>
          ) : null}
          <button
            className={style.menuTrigger}
            style={{ color: 'inherit' }}
            onClick={onToggleMobileMenu}
            type="button"
            aria-label="Menu"
          >
            <Icon styles={{ cursor: 'pointer' }} size={24} d={menuIcon} />
          </button>
        </>
      </div>
      <div className={style.desktopMenuContainer}>
        <ul className={style.menu}>
          <MainMenu isMobileMenuVisible={false} />
          <>
            <button
              className={style.subMenuTrigger}
              onClick={onToggleSubMenu}
              type="button"
              aria-label="Menu"
            >
              {'Show more'} <span className={style.menuArrow}>></span>
            </button>
            {isSubMenuVisible ? (
              <ul className={style.subMenu}>
                <SubMenu onToggleSubMenu={onToggleSubMenu} />
              </ul>
            ) : null}
          </>
        </ul>
      </div>
    </>
  );
};

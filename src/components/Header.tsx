import React, { useState, useEffect, HTMLAttributes } from 'react';
import Dompurify from 'dompurify';
import { Link } from 'react-scroll';
import { MenuItem, primaryMenu, secondaryMenu, mobilePrimaryMenu, mobileSecondaryMenu } from '../constants/menu';

const DEFAULT_FLOATING_HEADER_HEIGHT = 20;

type Props = HTMLAttributes<HTMLDivElement>;

function Header(props: Props) {
  const { className='', ...restProps } = props;

  const [floating, setFloating] = useState(false);
  const [drawerActive, setDrawerActive] = useState(false);

  function handleScroll() {
    setFloating(window.scrollY >= DEFAULT_FLOATING_HEADER_HEIGHT);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  });

  function renderLink(menuItem: MenuItem) {
    if(menuItem.to) return (
      <Link className="c-header__menu-item" to={menuItem.to} activeClass='is-active' spy={true} smooth={true} duration={300} offset={-90}>
        {menuItem.icon ? Dompurify.sanitize(menuItem.icon) : menuItem.label}
      </Link>
    );

    return (
      <a className="c-header__menu-item" href={menuItem.link}>
        {menuItem.icon ? Dompurify.sanitize(menuItem.icon) : menuItem.label}
      </a>
    );
  }

  function renderHamburger() {
    return(
      <li className="c-header__side-drawer-trigger">
        <button className={`hamburger hamburger--spin${drawerActive ? " is-active" : ""}`} onClick={() => setDrawerActive(!drawerActive)}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </li>
    );
  }

  return (
    <React.Fragment>
      <header className={`c-header${floating ? " is-floating" : ""}${className}`} {...restProps}>
        {/* Mobile header */}
        <ul className="is-mobile-only">{renderHamburger()}</ul>
        <ul className="is-mobile-only">
          {mobilePrimaryMenu.map(m => <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>)}
        </ul>
        <div className={`c-header__side-drawer is-mobile-only${drawerActive ? " is-active" : ""}`}>
          {mobileSecondaryMenu.map(m => <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>)}
        </div>
        <div className={`c-header__backdrop is-mobile-only${drawerActive ? " is-active" : ""}`} onClick={() => setDrawerActive(false)}/>

        {/* Desktop header */}
        <ul className="is-desktop-only">
          {primaryMenu.map(m => <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>)}
        </ul>
        <ul className="is-desktop-only">
          {secondaryMenu.map(m => <React.Fragment key={m.key}>{renderLink(m)}</React.Fragment>)}
        </ul>
      </header>
      <div className={`c-header__spacer${floating ? " is-floating" : ""}`}></div>
    </React.Fragment>
  );
}

export default Header;
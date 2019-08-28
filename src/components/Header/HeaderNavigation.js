import React from 'react';

import { NavLink } from 'react-router-dom';

import HamburgerMenu from 'react-hamburger-menu';

import SideBarNavigation from './SideBarNavigation';

import styles from './HeaderNavigation.module.scss';

class HeaderNavigation extends React.Component {
  state = {
    isOpen: false,
    location: null,
    isMobile: window.innerWidth < 1024,
  };

  componentDidMount = () => {
    const path = window.location.pathname;
    setTimeout(() => {
      const id = path.replace('/', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  handleResize = () => {
    this.setState(() => ({
      isMobile: window.innerWidth < 1024,
    }));
  };

  menuClicked = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  closeMenu = () => {
    this.setState(() => ({
      isOpen: false,
    }));
  };

  navOnClick = path => {
    if (path !== '') {
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      this.closeMenu();
    }
  };

  render() {
    window.addEventListener('resize', this.handleResize);

    return (
      <nav className={styles.sticky}>
        {this.state.isMobile && (
          <div className={styles.burger}>
            <HamburgerMenu
              width={25}
              height={20}
              strokeWidth={3}
              color={'#a1a1a1'}
              isOpen={this.state.isOpen}
              menuClicked={this.menuClicked}
            />
          </div>
        )}
        {this.state.isOpen && this.state.isMobile && (
          <SideBarNavigation isSideBarOpen={this.state.isOpen} navOnClickFn={this.navOnClick} />
        )}

        {this.state.isOpen && <div onClick={this.closeMenu} className={styles.overlay}></div>}

        {!this.state.isOpen && !this.state.isMobile && (
          <ul className={styles.wrapper}>
            <li className={styles.navItem}>
              <NavLink
                exact
                className={styles.navItemLink}
                to="/about"
                onClick={() => this.navOnClick('about')}
              >
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navItemLink}
                to="/discography"
                onClick={() => this.navOnClick('discography')}
              >
                Discography
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navItemLink}
                to="/concert-tours"
                onClick={() => this.navOnClick('concert-tours')}
              >
                Concert Tours
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navItemLink}
                to="/latter-compositions"
                onClick={() => this.navOnClick('latter-compositions')}
              >
                Latter Compositions
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navItemLink}
                to="/new-tracks"
                onClick={() => this.navOnClick('new-tracks')}
              >
                New tracks
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navItemLink}
                to="/upcoming-events"
                onClick={() => this.navOnClick('upcoming-events')}
              >
                Upcoming Events
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navItemLink}
                to="/history"
                onClick={() => this.navOnClick('history')}
              >
                History
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                className={styles.navItemLink}
                to="/contact"
                onClick={() => this.navOnClick('contact')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default HeaderNavigation;

import React from 'react';

// Modules
import { NavLink } from 'react-router-dom';
import IsScrolling from 'react-is-scrolling';

// Utilities
import HamburgerMenu from 'react-hamburger-menu';
import styles from './HeaderNavigation.module.scss';

// Components
import SideBarNavigation from './SideBarNavigation';

class HeaderNavigation extends React.Component {
  state = {
    isOpen: false,
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
    const { isMobile, isOpen } = this.state;
    const navClassName = window.pageYOffset > 0 ? styles.stickyFullfilled : styles.sticky;

    return (
      <nav className={navClassName}>
        {isMobile && (
          <div className={styles.burger}>
            <HamburgerMenu
              width={25}
              height={20}
              strokeWidth={3}
              color={'#a1a1a1'}
              isOpen={isOpen}
              menuClicked={this.menuClicked}
            />
          </div>
        )}
        {isOpen && isMobile && (
          <SideBarNavigation isSideBarOpen={isOpen} navOnClickFn={this.navOnClick} />
        )}

        {isOpen && <div onClick={this.closeMenu} className={styles.overlay} />}

        {!isOpen && !isMobile && (
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

export default IsScrolling(HeaderNavigation);

import React from "react";

import { HashLink as NavLink } from "react-router-hash-link";

import styles from "./SideBarNavigation.module.scss";

const SideBarNavigation = ({ navOnClickFn, ...props }) => {
  return (
    <aside className={styles.wrapper}>
      <ul className={styles.inner}>
        <li className={styles.navItem}>
          <NavLink
            exact
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/about"
            onClick={() => navOnClickFn("about")}
          >
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/discography"
            onClick={() => navOnClickFn("discography")}
          >
            Discography
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/concert-tours"
            onClick={() => navOnClickFn("concert-tours")}
          >
            Concert Tours
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/latter-compositions"
            onClick={() => navOnClickFn("latter-compositions")}
          >
            Latter Compositions
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/new-tracks"
            onClick={() => navOnClickFn("new-tracks")}
          >
            New tracks
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/upcoming-events"
            onClick={() => navOnClickFn("upcoming-events")}
          >
            Upcoming Events
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/history"
            onClick={() => navOnClickFn("history")}
          >
            History
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            activeClassName={styles.navItemLinkActive}
            className={styles.navItemLink}
            to="/contact"
            onClick={() => navOnClickFn("contact")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarNavigation;

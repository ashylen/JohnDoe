import React from 'react';

import { NavLink } from 'react-router-dom';
import { routes, routesNames } from '../../../routes';

import styles from './SideBarNavigation.module.scss';

const SideBarNavigation = ({ navOnClickFn }) => {
  return (
    <aside className={styles.wrapper}>
      <ul className={styles.inner}>
        {routes
          ? routes.map(route => (
              <li key={route} className={styles.navItem}>
                <NavLink
                  exact
                  className={styles.navItemLink}
                  to={`/${route}`}
                  onClick={() => navOnClickFn(route)}
                >
                  {routesNames[route]}
                </NavLink>
              </li>
            ))
          : null}
      </ul>
    </aside>
  );
};

export default SideBarNavigation;

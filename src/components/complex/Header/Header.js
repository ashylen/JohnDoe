import React from 'react';

// Modules
import HeaderNavigation from './HeaderNavigation';

// Utilities
import styles from './Header.module.scss';

// Components
import logo from './header-logo.png';

const Header = () => {
  return (
    <header id="about" className={styles.wrapper}>
      <HeaderNavigation />
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </div>
    </header>
  );
};

export default Header;

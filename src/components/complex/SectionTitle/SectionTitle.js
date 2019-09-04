import React from 'react';

import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children, textCustomize }) => {
  let customClassName;

  if (textCustomize !== 'gradient') {
    customClassName = styles.clippingMask;
  } else {
    customClassName = styles.gradient;
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={customClassName}>{children}</h1>
    </div>
  );
};

export default SectionTitle;

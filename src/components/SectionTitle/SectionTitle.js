import React from "react";

import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ children, textCustomize }) => {
  const bg =
    textCustomize !== "gradient"
      ? { backgroundImage: `url(${textCustomize})` }
      : null;

  const customClassName =
    textCustomize === "gradient"
      ? styles.gradient
      : textCustomize
      ? styles.clippingMask
      : styles.title;

  return (
    <div className={styles.wrapper}>
      <h1 className={customClassName} style={bg}>
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;

// TO DO, poprawić kolor fontów w stylach

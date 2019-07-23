import React from "react";

import styles from "./SectionDescription.module.scss";

const SectionDescription = ({ children }) => (
  <h2 className={styles.description}>{children}</h2>
);

export default SectionDescription;

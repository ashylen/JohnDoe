import React from "react";

import styles from "./TimelineHeader.module.scss";

const TimelineHeader = ({ date, children, secondary }) => {
  const wrapperClass = secondary ? styles.secondaryWrapper : styles.wrapper;

  return (
    <React.Fragment>
      <div className={wrapperClass}>
        <div className={styles.date}>{date}</div>
        <hr className={styles.spacer} />
        <div className={styles.text}>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default TimelineHeader;

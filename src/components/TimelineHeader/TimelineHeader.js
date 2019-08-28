import React from "react";

//Utilities
import styles from "./TimelineHeader.module.scss";
import { GetStringFromDateObject } from "../../utilities/Functions";

const TimelineHeader = ({ date, children, secondary }) => {
  const wrapperClass = secondary ? styles.secondaryWrapper : styles.wrapper;

  children = GetStringFromDateObject(children);

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

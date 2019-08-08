import React from "react";

import SocialBoxItem from "../SocialBox/SocialBoxItem";

import styles from "./SocialBox.module.scss";

const SocialBox = ({ socialBoxContent }) => {
  let items = Object.entries(socialBoxContent).map((socialItem, index) => {
    return (
      <SocialBoxItem key={index} icon={socialItem[1].icon} count={socialItem[1].count} />
    );
  });

  return (
    <React.Fragment>
      <div className={styles.wrapper}>{items}</div>
    </React.Fragment>
  );
};

export default SocialBox;

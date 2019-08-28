import React from "react";

import Button from "../Button/Button";
import SocialBox from "../SocialBox/SocialBox";

import styles from "./Box.module.scss";

const Box = ({
  header,
  text,
  buttonText,
  buttonBg,
  buttonClass,
  buttonHref,
  invertTextColor,
  socialBoxContent
}) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <div className={styles.header}>{header}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.additionalContent}>
        <Button
          href={buttonHref}
          buttonClass = { buttonClass }
          buttonBg={buttonBg}
          invertTextColor={invertTextColor}
        >
          {buttonText}
        </Button>
        {socialBoxContent && <SocialBox socialBoxContent={socialBoxContent} />}
      </div>
    </div>
  </React.Fragment>
);

export default Box;

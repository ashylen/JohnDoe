import React from "react";

import styles from "./Button.module.scss";

const Button = ({
  children,
  href,
  secondary,
  buttonBg,
  invertTextColor,
  openModalFn,
  fixed,
  ...props
}) => {
  const buttonClass = secondary
    ? fixed
      ? styles.secondaryFixed
      : styles.secondary
    : fixed
    ? styles.buttonFixed
    : styles.button;
  const textClass = invertTextColor ? styles.invertText : styles.text;

  return (
    <React.Fragment>
      {href ? (
        <a
          href={href}
          target="_blank"
          className={buttonClass}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <button
          onClick={openModalFn}
          style={buttonBg ? { backgroundImage: `url(${buttonBg})` } : null}
          className={buttonClass}
          {...props}
        >
          <span className={textClass}>{children}</span>
        </button>
      )}
    </React.Fragment>
  );
};

export default Button;

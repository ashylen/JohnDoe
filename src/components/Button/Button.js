import React from 'react';

// Modules
import PropTypes from 'prop-types';

// Utilities
import styles from './Button.module.scss';

const Button = ({
  children,
  href,
  buttonClass,
  buttonBg,
  invertTextColor,
  openModalFn,
  fixed,
  ...props
}) => {
  let className;
  switch (buttonClass) {
    case 'secondary':
      className = styles.secondary;
      break;
    case 'secondaryFixed':
      className = styles.secondaryFixed;
      break;
    case 'buttonFixed':
      className = styles.buttonFixed;
      break;
    case 'absoluteTL':
      className = styles.absoluteTopLeft;
      break;
    default:
      className = styles.button;
      break;
  }

  const textClass = invertTextColor ? styles.invertText : styles.text;
  return (
    <React.Fragment>
      {href ? (
        <a href={href} target="_blank" className={className} rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <button
          onClick={openModalFn}
          style={buttonBg ? { backgroundImage: `url(${buttonBg})` } : null}
          className={className}
          {...props}
        >
          <span className={textClass}>{children}</span>
        </button>
      )}
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: '',
  href: '',
  buttonClass: '',
  buttonBg: '',
  invertTextColor: false,
  openModalFn: () => {},
  fixed: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonBg: PropTypes.string,
  invertTextColor: PropTypes.bool,
  openModalFn: PropTypes.func,
  fixed: PropTypes.bool,
};

export default Button;

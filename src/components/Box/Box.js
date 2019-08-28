import React from 'react';

// Modules
import PropTypes from 'prop-types';

// Components
import Button from '../Button/Button';
import SocialBox from '../SocialBox/SocialBox';

// Utilities
import styles from './Box.module.scss';

const Box = ({
  header,
  text,
  buttonText,
  buttonBg,
  buttonClass,
  buttonHref,
  invertTextColor,
  socialBoxContent,
}) => (
  <React.Fragment>
    <div className={styles.wrapper}>
      <div className={styles.header}>{header}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.additionalContent}>
        <Button
          href={buttonHref}
          buttonClass={buttonClass}
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

Box.defaultProps = {
  buttonBg: '',
  buttonClass: '',
  buttonHref: '',
  invertTextColor: false,
  socialBoxContent: undefined
};

Box.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonBg: PropTypes.string,
  buttonClass: PropTypes.string,
  buttonHref: PropTypes.string,
  invertTextColor: PropTypes.bool,
  socialBoxContent: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    youTubeUrl: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired,
  }),
};

export default Box;

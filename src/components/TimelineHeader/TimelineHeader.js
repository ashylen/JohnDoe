import React from 'react';

// Modules
// import PropTypes from 'prop-types';

// Utilities
import styles from './TimelineHeader.module.scss';
import { GetStringFromDateObject } from '../../utilities/Functions/GetStringFromDateObject';

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

// TimelineHeader.defaultProps = {
//   secondary: false,
//   date: ''
// };

// TimelineHeader.propTypes = {
//   date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   children: PropTypes.string.isRequired,
//   secondary: PropTypes.bool,
// };

export default TimelineHeader;

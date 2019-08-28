import React from 'react';

// Modules
import PropTypes from 'prop-types';

// Utilities
import styles from './SummaryList.module.scss';

// Components
import TimelineHeader from '../TimelineHeader/TimelineHeader';

const SummaryList = ( {data} ) => {
  const { header, href, date, subText, youTubeUrl, text } = data;
    console.log(header);
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <TimelineHeader date="Composition name">{header}</TimelineHeader>
        <TimelineHeader date="Link">{href}</TimelineHeader>
        <TimelineHeader date="Date">{date}</TimelineHeader>
        <TimelineHeader date="Additional text">{subText}</TimelineHeader>
        <TimelineHeader date="Youtube URL">{youTubeUrl}</TimelineHeader>
        <TimelineHeader date="Text">{text}</TimelineHeader>
      </div>
    </React.Fragment>
  );
};

// SummaryList.propTypes = {
//   data: PropTypes.objectOf(
//     PropTypes.shape({
//       header: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       href: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       youTubeUrl: PropTypes.string.isRequired,
//       subText: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default SummaryList;

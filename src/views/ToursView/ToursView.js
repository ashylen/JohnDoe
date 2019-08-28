import React from 'react';

import Box from '../../components/Box/Box';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import TimelineHeader from '../../components/TimelineHeader/TimelineHeader';

import styles from './ToursView.module.scss';
import toursBg from '../../assets/images/tours-bg.png';
import content from '../../data/tours.json';

const ToursView = () => (
  <React.Fragment>
    <article
      id="concert-tours"
      className={styles.article}
      style={{ backgroundImage: `url(${toursBg})` }}
    >
      <div className={styles.wrapper}>
        <SectionTitle textCustomize="gradient">Concert Tours</SectionTitle>
        <SectionDescription>{content.sectionDescription}</SectionDescription>

        <div className={styles.track}>
          <TimelineHeader date="03.08.2015">SMOKE + MIRRORS TOUR</TimelineHeader>
          <Box header={content.box1.header} text={content.box1.text} buttonText="Buy online" />
        </div>
      </div>
    </article>
  </React.Fragment>
);

export default ToursView;

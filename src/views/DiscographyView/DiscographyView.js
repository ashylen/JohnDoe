import React from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import Box from '../../components/Box/Box';
import TimelineHeader from '../../components/TimelineHeader/TimelineHeader';

import styles from './DiscographyView.module.scss';
import discographyBg from '../../assets/images/discography-bg.png';
import Button1Bg from '../../assets/images/discography-button-1-bg.png';
import Button2Bg from '../../assets/images/discography-button-2-bg.png';
import Button3Bg from '../../assets/images/discography-button-3-bg.png';
import textClippingMask from '../../assets/images/title-1-bg.png';
import content from '../../data/discography.json';

const DiscographyView = () => (
  <React.Fragment>
    <article
      id="discography"
      className={styles.article}
      style={{ backgroundImage: `url(${discographyBg})` }}
    >
      <div className={styles.wrapper}>
        <SectionTitle textCustomize={textClippingMask}>Discography</SectionTitle>
        <SectionDescription>{content.sectionDescription}</SectionDescription>

        <div className={styles.track}>
          <TimelineHeader date={2010}>HELL AND SILENCE</TimelineHeader>
          <Box
            header={content.box1.header}
            text={content.box1.text}
            buttonText="PLAY"
            buttonBg={Button1Bg}
            buttonClass="secondary"
            invertTextColor
          />
        </div>
        <div className={styles.track}>
          <TimelineHeader date={2012}>NIGHT VISIONS</TimelineHeader>
          <Box
            header={content.box2.header}
            text={content.box2.text}
            buttonText="PLAY"
            buttonBg={Button2Bg}
            buttonClass="secondary"
          />
        </div>
        <div className={styles.track}>
          <TimelineHeader date={2015}>SMOKE + MIRRORS</TimelineHeader>
          <Box
            header={content.box3.header}
            text={content.box3.text}
            buttonText="PLAY"
            buttonBg={Button3Bg}
            buttonClass="secondary"
          />
        </div>
      </div>
    </article>
  </React.Fragment>
);

export default DiscographyView;

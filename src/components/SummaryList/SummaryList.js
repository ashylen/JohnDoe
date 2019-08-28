import React from 'react';

//Utilities
import styles from './SummaryList.module.scss';

//Components
import TimelineHeader from '../TimelineHeader/TimelineHeader';

const SummaryList = props => {
    const { header, href, date, subText, youTubeUrl, text } = props.data;
   
    return (
        <React.Fragment>
            <div className={styles.wrapper}>
                <TimelineHeader date={"Composition name"}>
                    {header}
                </TimelineHeader>
                <TimelineHeader date={"Link"}>
                    {href}
                </TimelineHeader>
                <TimelineHeader date={"Date"}>
                    {date}
                </TimelineHeader>
                <TimelineHeader date={"Additional text"}>
                    {subText}
                </TimelineHeader>
                <TimelineHeader date={"Youtube URL"}>
                    {youTubeUrl}
                </TimelineHeader>
                <TimelineHeader date={"Text"}>
                    {text}
                </TimelineHeader>
            </div>
        </React.Fragment>
    );
}

export default SummaryList;
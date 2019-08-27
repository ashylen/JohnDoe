import React from 'react';

import styles from './SummaryList.module.scss';

import Input from '../Input/Input';
import TimelineHeader from '../TimelineHeader/TimelineHeader';

const SummaryList = props => {
    const { header, href, date, subText, videoId, text } = props.data;
    console.log(props);
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
                    {videoId}
                </TimelineHeader>
                <TimelineHeader date={"Text"}>
                    {text}
                </TimelineHeader>
            </div>
        </React.Fragment>
    );
}

export default SummaryList;
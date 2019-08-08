import React from "react";

import YouTube from "react-youtube";

import AppContext from "../../context";

import Box from "../../components/Box/Box";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SectionDescription from "../../components/SectionDescription/SectionDescription";
import TimelineHeader from "../../components/TimelineHeader/TimelineHeader";
import Button from "../../components/Button/Button";

import styles from "./LatterCompositionsView.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeDown,
  faHeart,
  faShareSquare,
  faCommentAlt,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import json from "../../data/latter-compositions.json";

const socialBoxTestContent = {
  auditions: {
    icon: faVolumeDown,
    count: Math.floor(Math.random() * 1000)
  },
  likes: {
    icon: faHeart,
    count: Math.floor(Math.random() * 1000)
  },
  shares: {
    icon: faShareSquare,
    count: Math.floor(Math.random() * 1000)
  },
  comments: {
    icon: faCommentAlt,
    count: Math.floor(Math.random() * 1000)
  }
};

const LatterCompositionsView = () => (
  <React.Fragment>
    <AppContext.Consumer>
      {context => (
        <article id="latter-compositions" className={styles.article}>
          <div className={styles.wrapper}>
            <SectionTitle>Latter Compositions </SectionTitle>
            <SectionDescription>{json.sectionDescription}</SectionDescription>
            {context.compositions.length
              ? context.compositions.map(item => (
                  <div className={styles.inner}>
                    <div className={styles.description}>
                      <TimelineHeader secondary={true} date={item.date}>
                        {item.subText}
                      </TimelineHeader>
                      <Box
                        header={item.header}
                        text={item.text}
                        buttonText={"Visit on iTunes"}
                        buttonHref={item.href}
                        socialBoxContent={socialBoxTestContent}
                      />
                    </div>
                    <div className={styles.video}>
                      {item.videoId && <YouTube videoId={item.videoId} />}
                    </div>
                  </div>
                ))
              : null}

            <Button fixed openModalFn={context.openModalFn}>
              <FontAwesomeIcon icon={faPlus} color="#abacac" size="1x" />
            </Button>
          </div>
        </article>
      )}
    </AppContext.Consumer>
  </React.Fragment>
);

export default LatterCompositionsView;

import React from "react";

import styles from "./SocialBox.module.scss";
import {
  faVolumeDown,
  faHeart,
  faShareSquare,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";

import SocialBoxItem from "../SocialBox/SocialBoxItem";

const SocialBox = ({socialBoxContent}) => {
  const { auditions, likes, comments, shares } = socialBoxContent;

  const items = (
    <React.Fragment>
      <SocialBoxItem icon={faVolumeDown} count={auditions.count} />
      <SocialBoxItem icon={faHeart} count={likes.count} />
      <SocialBoxItem icon={faShareSquare} count={comments.count} />
      <SocialBoxItem icon={faCommentAlt} count={shares.count} />
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className={styles.wrapper}>{items}</div>
    </React.Fragment>
  );
};

export default SocialBox;

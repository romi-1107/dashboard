import React from "react";
import videoIcon from "assets/icons/video.svg";
import styles from "./VideoListItem.module.scss";
import Image from "next/image";

export function VideoListItem() {
  const { videoListItemContainer } = styles;
  return (
    <div className={videoListItemContainer}>
      <Image src={videoIcon} alt="video-icon" />
    </div>
  );
}

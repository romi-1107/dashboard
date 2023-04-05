import React from "react";
import { VideoListItem } from "../videoListItem/VideoListItem";
import styles from "./VideoList.module.scss";

const videoListData = [1, 2, 3, 4, 5];

export function VideoList() {
  const { videoListContainer } = styles;
  return (
    <div className={videoListContainer}>
      {videoListData.map((video) => (
        <VideoListItem key={video} />
      ))}
    </div>
  );
}

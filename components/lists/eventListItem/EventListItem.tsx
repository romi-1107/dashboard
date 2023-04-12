import React from "react";
import styles from "./EventListItem.module.scss";
import homeIcon from "assets/icons/home.svg";
import Image from "next/image";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import moreIcon from "assets/icons/more.svg";
import videoIcon from "assets/icons/video-white.svg";
import { EventListTypes } from "types/eventListTypes";

export function EventListItem({ date, time, title, label }: EventListTypes) {
  const {
    eventListItemContainer,
    thumbnailContainer,
    thumbnail,
    schedule,
    dateContainer,
    eventContainer,
    eventName,
    actionContainer,
    moreContainer,
  } = styles;
  return (
    <div className={eventListItemContainer}>
      <div className={thumbnailContainer}>
        <div className={thumbnail}>
          <div className={schedule}>Scheduled</div>
          <p>Event Thumbnail</p>
        </div>
        <div className={dateContainer}>
          <p>Date</p>
          <h3>{date}</h3>
          <p>at {time}</p>
        </div>
      </div>
      <div className={eventContainer}>
        <p>Event</p>
        <h3>{title}</h3>
        <div className={eventName}>
          <Image src={homeIcon} alt="home-icon" />
          <span>{label}</span>
        </div>
      </div>
      <div className={actionContainer}>
        <SolidBtn
          text="control_room"
          link="/chat-room"
          width="18rem"
          height="5rem"
          bg="black"
          icon={videoIcon}
        />
        <div className={moreContainer}>
          <Image src={moreIcon} alt="more-icon" />
        </div>
      </div>
    </div>
  );
}

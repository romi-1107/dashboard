import React from "react";
import styles from "./EventModalContent.module.scss";
import mobileFrame from "assets/icons/mobile-frame-2.svg";
import Image from "next/image";
import copyIcon from "assets/icons/copy.svg";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import videoIcon from "assets/icons/video-2.svg";

export function EventModalContent() {
  const {
    eventModalContentContainer,
    imgContainer,
    contentWrapper,
    linkContainer,
    btnContainer,
    contentContainer,
  } = styles;

  return (
    <div className={eventModalContentContainer}>
      <div className={imgContainer}>
        <Image src={mobileFrame} alt="mobile-frame" />
      </div>
      <div className={contentWrapper}>
        <div className={contentContainer}>
          <h2>
            Congratulations, <span>your event Summer Collection Live!</span>
            on
            <span>Thursday, 20 May 2021, 7:00 PM</span> has been created!
          </h2>
          <p>
            It’s time to show it to the rest of the world! Share your live to
            your audience:
          </p>
        </div>
      </div>
      <div className={linkContainer}>
        <p>http://www.jumble.tv/summer_live</p>
        <div>
          <Image src={copyIcon} alt="copy-icon" />
        </div>
      </div>
      <div className={btnContainer}>
        <SolidBtn
          bg="#48C9FF"
          link="/chat-room"
          width="18.8rem"
          height="5rem"
          icon={videoIcon}
          text="Chat Room"
        />
      </div>
    </div>
  );
}

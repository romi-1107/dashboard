import React from "react";
import styles from "./EventModalContent.module.scss";
import mobileFrame from "assets/icons/mobile-frame-2.svg";
import Image from "next/image";
import copyIcon from "assets/icons/copy.svg";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import videoIcon from "assets/icons/video-2.svg";
import { useTranslation } from "next-i18next";

export function EventModalContent() {
  const {
    eventModalContentContainer,
    imgContainer,
    contentWrapper,
    linkContainer,
    btnContainer,
    contentContainer,
  } = styles;

  const { t } = useTranslation("modal");

  return (
    <div className={eventModalContentContainer}>
      <div className={imgContainer}>
        <Image src={mobileFrame} alt="mobile-frame" />
      </div>
      <div className={contentWrapper}>
        <div className={contentContainer}>
          <h3>
            {t("congratulations")},{" "}
            <span>{t("your_event")} Summer Collection Live!</span>
            on
            <span>Thursday, 20 May 2021, 7:00 PM</span> {t("created")}
          </h3>
          <p>{t("time_show")}</p>
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
          text="chat_room"
        />
      </div>
    </div>
  );
}

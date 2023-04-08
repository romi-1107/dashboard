import React from "react";
import styles from "./ChatRoomModalContent.module.scss";
import mobileFrame from "assets/icons/mobile-frame-2.svg";
import Image from "next/image";
import copyIcon from "assets/icons/copy.svg";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import crossIcon from "assets/icons/cross.svg";
import { TextLg } from "common/texts/textLg/TextLg";
import qrPic from "assets/icons/qr.svg";

export function ChatRoomModalContent({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const {
    eventModalContentContainer,
    imgContainer,
    contentWrapper,
    linkContainer,
    btnContainer,
    contentContainer,
    imgWrapper,
    listContainer,
  } = styles;

  return (
    <div className={eventModalContentContainer}>
      <div className={imgWrapper}>
        <div className={imgContainer} onClick={onCloseModal}>
          <Image src={crossIcon} alt="mobile-frame" />
        </div>
        <div className={listContainer}>
          <div>
            <TextLg text="Preview Checklist:" />
            <ul>
              <li>Make sure your catalog looks great</li>
              <li>Practice by connecting the video</li>
              <li>Interact with the chat</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={contentWrapper}>
        <div className={contentContainer}>
          <h2>Scan the QR code to preview on your mobile</h2>
          <Image src={qrPic} alt="qr" />
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
          text="Go To Preview"
        />
      </div>
    </div>
  );
}

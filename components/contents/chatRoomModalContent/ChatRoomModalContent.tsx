import React from "react";
import styles from "./ChatRoomModalContent.module.scss";
import Image from "next/image";
import copyIcon from "assets/icons/copy.svg";
import { SolidBtn } from "common/buttons/solidBtn/SolidBtn";
import crossIcon from "assets/icons/cross.svg";
import { TextLg } from "common/texts/textLg/TextLg";
import qrPic from "assets/icons/qr.svg";
import { useTranslation } from "next-i18next";

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

  const { t } = useTranslation("modal");

  return (
    <div className={eventModalContentContainer}>
      <div className={imgWrapper}>
        <div className={imgContainer} onClick={onCloseModal}>
          <Image src={crossIcon} alt="mobile-frame" />
        </div>
        <div className={listContainer}>
          <div>
            <TextLg text={t("preview_checklist")} />
            <ul>
              <li> {t("checklist_1")} </li>
              <li> {t("checklist_2")} </li>
              <li>{t("checklist_3")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={contentWrapper}>
        <div className={contentContainer}>
          <h3>{t("scan_qr")}</h3>
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
          text={t("go_to_preivew")}
        />
      </div>
    </div>
  );
}

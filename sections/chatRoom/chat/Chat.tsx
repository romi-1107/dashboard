import React from "react";
import styles from "./Chat.module.scss";
import sendIcon from "assets/icons/send.svg";
import Image from "next/image";
import pic1 from "assets/pics/pic-1.jpeg";
import pic2 from "assets/pics/pic-2.jpeg";
import { TextXs } from "common/texts/textXs/TextXs";
import { SwitchBox } from "common/swtichBox/SwitchBox";
import { useTranslation } from "next-i18next";

export function Chat() {
  const {
    chatWrapper,
    chatContainer,
    inputWrapper,
    sendBox,
    senderContainer,
    receiverContainer,
    leftMsg,
    rightMsg,
    filterContainer,
    filterWrapper,
  } = styles;

  const { t } = useTranslation("chat-room");
  return (
    <>
      <div className={filterWrapper}>
        <div className={filterContainer}>
          <TextXs text={t("filter_by_question")} />
          <SwitchBox />
        </div>
      </div>
      <div className={chatWrapper}>
        <div className={chatContainer}>
          <div className={receiverContainer}>
            <div className={rightMsg}>
              <div>
                <TextXs text="Welcome everybody" />
              </div>
              <Image src={pic2} alt="profile-pic" />
            </div>
          </div>
          <div className={senderContainer}>
            <div className={leftMsg}>
              <Image src={pic1} alt="profile-pic" />
              <div>
                <TextXs text="Hi" />
              </div>
            </div>
          </div>
        </div>
        <div className={inputWrapper}>
          <input type="text" placeholder={t("make_live_great")} />
          <div className={sendBox}>
            <Image src={sendIcon} alt="send-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

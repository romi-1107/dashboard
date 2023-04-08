import React from "react";
import styles from "./Chat.module.scss";
import sendIcon from "assets/icons/send.svg";
import Image from "next/image";
import pic1 from "assets/pics/pic-1.jpeg";
import pic2 from "assets/pics/pic-2.jpeg";
import { TextSm } from "common/texts/textSm/TextSm";
import { TextXs } from "common/texts/textXs/TextXs";
import { SwitchBox } from "common/swtichBox/SwitchBox";

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
  return (
    <>
      <div className={filterWrapper}>
        <div className={filterContainer}>
          <TextXs text="Filter by Questions" />
          <SwitchBox />
        </div>
      </div>
      <div className={chatWrapper}>
        <div className={chatContainer}>
          <div className={receiverContainer}>
            <div className={rightMsg}>
              <TextXs text="Welcome everyone" />
              <Image src={pic2} alt="profile-pic" />
            </div>
          </div>
          <div className={senderContainer}>
            <div className={leftMsg}>
              <Image src={pic1} alt="profile-pic" />
              <TextXs text="Hi" />
            </div>
          </div>
        </div>
        <div className={inputWrapper}>
          <input type="text" placeholder="Let’s make this live a great one" />
          <div className={sendBox}>
            <Image src={sendIcon} alt="send-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import styles from "./EventHeader.module.scss";
import Link from "next/link";
import { EventTag } from "common/tags/eventTag/EventTag";
import { TextLg } from "common/texts/textLg/TextLg";
import copyIcon from "assets/icons/copy.svg";
import { TextSm } from "common/texts/textSm/TextSm";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { EventHeaderTYpes } from "types/eventHeaderTypes";

export function EventHeader({
  heading,
  text,
  date,
  time,
  eventName,
  eventLink,
}: EventHeaderTYpes) {
  const {
    eventInfoContainer,
    logoContainer,
    logoBox,
    eventInfo,
    linkContainer,
  } = styles;

  const { t } = useTranslation("common");
  return (
    <div className={eventInfoContainer}>
      <div>
        <EventTag />
        <div className={logoContainer}>
          <div className={logoBox}>
            <p>Logo</p>
          </div>
          <div className={eventInfo}>
            <TextSm text="Date" color="#777777" fontWeight="400" />
            <TextLg text={date} />
            <TextSm text={`at ${time}`} color="#777777" fontWeight="400" />
          </div>
        </div>
      </div>
      <div>
        <div className={eventInfo}>
          <TextSm text={t("event")} color="#777777" fontWeight="400" />
          <TextLg text={eventName} />
          <div className={linkContainer}>
            <Image src={copyIcon} alt="copy-icon" />
            <Link href={eventLink}>{eventLink}</Link>
          </div>
        </div>
      </div>
      <div>
        <div className={eventInfo}>
          <TextSm text={heading} color="#777777" fontWeight="400" />
          <TextSm text={text} color="#777777" fontWeight="400" />
        </div>
      </div>
    </div>
  );
}

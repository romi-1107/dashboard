import { TextXs } from "common/texts/textXs/TextXs";
import React from "react";
import styles from "./EventTag.module.scss";
import { useTranslation } from "next-i18next";

export function EventTag() {
  const { eventTagContainer } = styles;
  const { t } = useTranslation("common");
  return (
    <div className={eventTagContainer}>
      <TextXs text={t("live_event")} color="black" />
    </div>
  );
}

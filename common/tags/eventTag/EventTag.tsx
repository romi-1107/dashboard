import { TextXs } from "common/texts/textXs/TextXs";
import React from "react";
import styles from "./EventTag.module.scss";

export function EventTag() {
  const { eventTagContainer } = styles;
  return (
    <div className={eventTagContainer}>
      <TextXs text="Live Event" color="black" />
    </div>
  );
}

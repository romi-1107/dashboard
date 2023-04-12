import React from "react";
import styles from "./TextSm.module.scss";
import { TextTypes } from "types/textTypes";

export function TextSm({ text, color, fontWeight }: TextTypes) {
  const { textSm } = styles;

  return (
    <p style={{ color: color, fontWeight }} className={textSm}>
      {text}
    </p>
  );
}

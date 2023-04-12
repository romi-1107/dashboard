import React from "react";
import styles from "./TextMd.module.scss";
import { TextTypes } from "types/textTypes";

export function TextMd({ text, color }: TextTypes) {
  const { textMd } = styles;
  return (
    <p className={textMd} style={{ color }}>
      {text}
    </p>
  );
}

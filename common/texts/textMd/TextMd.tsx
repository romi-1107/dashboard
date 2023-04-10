import React from "react";
import styles from "./TextMd.module.scss";
import { textTypes } from "types/textTypes";

export function TextMd({ text, color }: textTypes) {
  const { textMd } = styles;
  return (
    <p className={textMd} style={{ color }}>
      {text}
    </p>
  );
}

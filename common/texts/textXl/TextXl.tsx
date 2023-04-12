import React from "react";
import styles from "./TextXl.module.scss";
import { TextTypes } from "types/textTypes";

export function TextXl({ text, color }: TextTypes) {
  const { textXl } = styles;
  return (
    <p className={textXl} style={{ color }}>
      {text}
    </p>
  );
}

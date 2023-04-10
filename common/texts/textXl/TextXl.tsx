import React from "react";
import styles from "./TextXl.module.scss";
import { textTypes } from "types/textTypes";

export function TextXl({ text, color }: textTypes) {
  const { textXl } = styles;
  return (
    <p className={textXl} style={{ color }}>
      {text}
    </p>
  );
}

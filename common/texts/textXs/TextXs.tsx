import React from "react";
import styles from "./TextXs.module.scss";
import { TextTypes } from "types/textTypes";

export function TextXs({ text, color, fontWeight }: TextTypes) {
  const { textXs } = styles;
  return (
    <p className={textXs} style={{ color, fontWeight }}>
      {text}
    </p>
  );
}

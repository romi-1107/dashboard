import React from "react";
import styles from "./TextXs.module.scss";
import { textTypes } from "types/textTypes";

export function TextXs({ text, color, fontWeight }: textTypes) {
  const { textXs } = styles;
  return (
    <p className={textXs} style={{ color, fontWeight }}>
      {text}
    </p>
  );
}

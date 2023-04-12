import React from "react";
import styles from "./TextLg.module.scss";
import { TextTypes } from "types/textTypes";

export function TextLg({ text, color }: TextTypes) {
  const { textLg } = styles;
  return (
    <p className={textLg} style={{ color }}>
      {text}
    </p>
  );
}

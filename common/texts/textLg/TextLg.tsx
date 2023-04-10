import React from "react";
import styles from "./TextLg.module.scss";
import { textTypes } from "types/textTypes";

export function TextLg({ text, color }: textTypes) {
  const { textLg } = styles;
  return (
    <p className={textLg} style={{ color }}>
      {text}
    </p>
  );
}

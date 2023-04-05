import React from "react";
import styles from "./TextMd.module.scss";

export function TextMd({ text }: { text: string }) {
  const { textMd } = styles;
  return <p className={textMd}>{text}</p>;
}

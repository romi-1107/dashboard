import React from "react";
import styles from "./TextXl.module.scss";

export function TextXl({ text }: { text: string }) {
  const { textXl } = styles;
  return <p className={textXl}>{text}</p>;
}

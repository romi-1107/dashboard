import React from "react";
import styles from "./TextLg.module.scss";

export function TextLg({ text }: { text: string }) {
  const { textLg } = styles;
  return <p className={textLg}>{text}</p>;
}

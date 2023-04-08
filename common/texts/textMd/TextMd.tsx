import React from "react";
import styles from "./TextMd.module.scss";

export function TextMd({ text, color }: { text: string; color?: string }) {
  const { textMd } = styles;
  return (
    <p className={textMd} style={{ color }}>
      {text}
    </p>
  );
}

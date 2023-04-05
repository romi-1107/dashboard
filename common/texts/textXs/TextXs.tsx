import React from "react";
import styles from "./TextXs.module.scss";

export function TextXs({ text, color }: { text: string; color?: string }) {
  const { textXs } = styles;
  return (
    <p className={textXs} style={{ color }}>
      {text}
    </p>
  );
}

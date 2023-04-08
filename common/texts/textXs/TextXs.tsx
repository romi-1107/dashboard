import React from "react";
import styles from "./TextXs.module.scss";

export function TextXs({
  text,
  color,
  fontWeight,
}: {
  text: string;
  color?: string;
  fontWeight?: string;
}) {
  const { textXs } = styles;
  return (
    <p className={textXs} style={{ color, fontWeight }}>
      {text}
    </p>
  );
}

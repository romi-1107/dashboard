import React from "react";
import styles from "./TextSm.module.scss";
export function TextSm({
  text,
  color,
  component,
  fontWeight,
}: {
  text: string;
  color?: string;
  component?: string;
  fontWeight?: string;
}) {
  const { textSm } = styles;

  if (component === "h2") {
    <h2 style={{ color: color, fontWeight }} className={textSm}>
      {text}
    </h2>;
  } else {
    return (
      <p style={{ color: color, fontWeight }} className={textSm}>
        {text}
      </p>
    );
  }
}

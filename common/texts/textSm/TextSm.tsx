import React from "react";
import styles from "./TextSm.module.scss";
import { textTypes } from "types/textTypes";

export function TextSm({ text, color, component, fontWeight }: textTypes) {
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

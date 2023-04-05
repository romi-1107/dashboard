import React from "react";
import styles from "./TextSm.module.scss";
import { useTranslation } from "next-i18next";
export function TextSm({
  text,
  color,
  component,
}: {
  text: string;
  color?: string;
  component?: string;
}) {
  const { t } = useTranslation("common");
  const { textSm } = styles;

  if (component === "h2") {
    <h2 style={{ color: color }} className={textSm}>
      {t(text)}
    </h2>;
  } else {
    return (
      <p style={{ color: color }} className={textSm}>
        {t(text)}
      </p>
    );
  }
}

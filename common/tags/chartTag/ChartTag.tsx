import React from "react";
import styles from "./ChartTag.module.scss";

export function ChartTag({ bg }: { bg: string }) {
  const { chartTagContainer } = styles;
  return <div className={chartTagContainer} style={{ backgroundColor: bg }} />;
}

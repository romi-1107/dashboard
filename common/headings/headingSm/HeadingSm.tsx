import React from "react";
import styles from "./HeadingSm.module.scss";

export function HeadingSm({ heading }: { heading: string }) {
  const { headingSm } = styles;
  return <h1 className={headingSm}>{heading}</h1>;
}

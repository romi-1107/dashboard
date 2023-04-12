import React from "react";
import styles from "./OutlineBtn.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { OutlineBtnTypes } from "types/buttonTypes";

export function OutlineBtn({ text, icon, width, height }: OutlineBtnTypes) {
  const { solidBtn } = styles;
  const { t } = useTranslation();
  return (
    <button className={solidBtn} style={{ width, height }}>
      {icon && <Image src={icon} alt="icon" />}
      <span>{t(text)}</span>
    </button>
  );
}

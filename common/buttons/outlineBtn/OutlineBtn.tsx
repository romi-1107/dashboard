import React from "react";
import styles from "./OutlineBtn.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";

type outlineBtnTypes = {
  text: string;
  icon?: string;
  width: string;
  height: string;
};

export function OutlineBtn({ text, icon, width, height }: outlineBtnTypes) {
  const { solidBtn } = styles;
  const { t } = useTranslation();
  return (
    <button className={solidBtn} style={{ width, height }}>
      {icon && <Image src={icon} alt="icon" />}
      <span>{t(text)}</span>
    </button>
  );
}

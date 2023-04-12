import Link from "next/link";
import React from "react";
import styles from "./SolidBtn.module.scss";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { SolidBtnTypes } from "types/buttonTypes";

export function SolidBtn({
  text,
  icon,
  link,
  width,
  height,
  bg,
  onClickSolidBtn,
}: SolidBtnTypes) {
  const { solidBtn } = styles;
  const { t } = useTranslation("common");

  if (link) {
    return (
      <Link
        href={link}
        className={solidBtn}
        style={{ width, height, backgroundColor: bg }}
      >
        {icon && <Image src={icon} alt="icon" />}
        <span>{t(text)}</span>
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClickSolidBtn}
        className={solidBtn}
        style={{ width, height, backgroundColor: bg }}
      >
        {icon && <Image src={icon} alt="icon" />}
        <span>{t(text)}</span>
      </button>
    );
  }
}

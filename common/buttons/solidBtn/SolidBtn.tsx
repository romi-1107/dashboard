import Link from "next/link";
import React from "react";
import styles from "./SolidBtn.module.scss";
import Image from "next/image";

type solidBtnTypes = {
  text: string;
  icon?: string;
  link: string;
  width: string;
  height: string;
  bg: string;
};

export function SolidBtn({
  text,
  icon,
  link,
  width,
  height,
  bg,
}: solidBtnTypes) {
  const { solidBtn } = styles;
  return (
    <Link
      href={link}
      className={solidBtn}
      style={{ width, height, backgroundColor: bg }}
    >
      {icon && <Image src={icon} alt="icon" />}
      <span>{text}</span>
    </Link>
  );
}

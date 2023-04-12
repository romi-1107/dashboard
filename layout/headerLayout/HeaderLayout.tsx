import React, { Children } from "react";
import styles from "./HeaderLayout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { TextSm } from "common/texts/textSm/TextSm";
import leftArrowIcon from "assets/icons/left-arrow.svg";
import { useTranslation } from "next-i18next";

export function HeaderLayout({ children }: { children: JSX.Element }) {
  const { headingContainer } = styles;
  const { t } = useTranslation("common");

  return (
    <div className={headingContainer}>
      <Link href="/events">
        <Image src={leftArrowIcon} alt="arrow" />
        <TextSm text={t("go_back_events")} />
      </Link>
      <div>{children}</div>
    </div>
  );
}

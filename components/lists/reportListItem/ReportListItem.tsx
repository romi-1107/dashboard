import React from "react";
import styles from "./ReportListItem.module.scss";
import { TextXl } from "common/texts/textXl/TextXl";
import { TextSm } from "common/texts/textSm/TextSm";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { ReportListTypes } from "types/analysisTypes";

export function ReportListItem({ icon, title, value }: ReportListTypes) {
  const { reportBox, iconBox, reportValueContainer } = styles;
  const { t } = useTranslation("analysis");

  return (
    <div className={reportBox}>
      <div className={iconBox}>
        <Image src={icon} alt="icon" />
      </div>
      <div className={reportValueContainer}>
        <TextSm text={t(title)} color="#777777" fontWeight="400" />
        <TextXl text={value} color="black" />
      </div>
    </div>
  );
}

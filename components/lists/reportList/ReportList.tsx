import React from "react";
import { ReportListItem } from "../reportListItem/ReportListItem";
import styles from "./ReportList.module.scss";

export function ReportList({ reportData }) {
  const { reportListContainer } = styles;
  return (
    <div className={reportListContainer}>
      {reportData.map(({ id, title, value, icon }) => (
        <ReportListItem key={id} title={title} value={value} icon={icon} />
      ))}
    </div>
  );
}

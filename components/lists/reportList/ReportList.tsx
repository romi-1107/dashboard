import React from "react";
import { ReportListItem } from "../reportListItem/ReportListItem";
import styles from "./ReportList.module.scss";

export function ReportList({ reportData }) {
  const { reportListContainer } = styles;
  return (
    <div className={reportListContainer}>
      {reportData.map(({ id, title, vlaue, icon }) => (
        <ReportListItem key={id} title={title} value={vlaue} icon={icon} />
      ))}
    </div>
  );
}

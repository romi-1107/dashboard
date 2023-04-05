import React from "react";
import styles from "./Events.module.scss";
import { DashboardLayout } from "layout/dashboardLayout/DashboardLayout";
import { TextMd } from "common/texts/textMd/TextMd";

export function Events() {
  const { eventSection, mainContainer } = styles;
  return (
    <section className={eventSection}>
      <DashboardLayout navText="events">
        <div className={mainContainer}>
          <TextMd text="Events will go here" />
        </div>
      </DashboardLayout>
    </section>
  );
}

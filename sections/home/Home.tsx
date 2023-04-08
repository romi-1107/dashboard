import React from "react";
import styles from "./Home.module.scss";
import { DashboardLayout } from "layout/dashboardLayout/DashboardLayout";
import { EventList } from "components/lists/eventList/EventList";
import { HeadingSm } from "common/headings/headingSm/HeadingSm";
import logo2 from "assets/logos/logo-2.svg";
import Image from "next/image";
import { VideoList } from "components/lists/videoList/VideoList";
import { useTranslation } from "next-i18next";

export function Home() {
  const { mainContainer, eventListContainer, headingContainer } = styles;

  const { t } = useTranslation("home");
  return (
    <section>
      <DashboardLayout navText={t("home")}>
        <div className={mainContainer}>
          <div className={headingContainer}>
            <HeadingSm heading={t("learn")} />
            <Image src={logo2} alt="logo" />
          </div>
          <VideoList />
          <div className={eventListContainer}>
            <HeadingSm heading={t("upcoming_events")} />
            <EventList />
          </div>
        </div>
      </DashboardLayout>
    </section>
  );
}

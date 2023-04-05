import React from "react";
import { Sidebar } from "layout/sidebar/Sidebar";
import styles from "./DashboardLayout.module.scss";
import { Navbar } from "layout/navbar/Navbar";

type dashboarLayoutProps = {
  children: JSX.Element;
  navText: string;
};

export function DashboardLayout({ children, navText }: dashboarLayoutProps) {
  const { dashboardLayoutContainer, mainSection } = styles;
  return (
    <main className={dashboardLayoutContainer}>
      <Sidebar />
      <div className={mainSection}>
        <Navbar navText={navText} />
        {children}
      </div>
    </main>
  );
}

import styles from "./Analysis.module.scss";
import { DashboardLayout } from "layout/dashboardLayout/DashboardLayout";
import Image from "next/image";
import leftArrowIcon from "assets/icons/left-arrow.svg";
import Link from "next/link";
import { TextSm } from "common/texts/textSm/TextSm";
import downloadIcon from "assets/icons/download.svg";
import { OutlineBtn } from "common/buttons/outlineBtn/OutlineBtn";
import { TextLg } from "common/texts/textLg/TextLg";
import { EventTag } from "common/tags/eventTag/EventTag";
import copyIcon from "assets/icons/copy.svg";
import eyeIcon from "assets/icons/white-eye.svg";
import commentsIcon from "assets/icons/comments.svg";
import shareIcon from "assets/icons/share.svg";
import chatIcon from "assets/icons/chat.svg";
import engagmentIcon from "assets/icons/engagment.svg";
import totalIcon from "assets/icons/total.svg";
import orderIcon from "assets/icons/order-2.svg";
import amountIcon from "assets/icons/amount.svg";
import averageOrderIcon from "assets/icons/average-order.svg";
import { TextXl } from "common/texts/textXl/TextXl";
import { ReportList } from "components/lists/reportList/ReportList";
import { AnalysisChart } from "components/charts/analysisChart/AnalysisChart";
import { useTranslation } from "next-i18next";

const engagementKPIData = [
  { id: 1, title: "unique_viewers", value: "182", icon: eyeIcon },
  { id: 2, title: "total_emoticons", value: "$11 254", icon: totalIcon },
  { id: 3, title: "total_comments", value: "977", icon: commentsIcon },
  { id: 4, title: "total_share", value: "23", icon: shareIcon },
  { id: 5, title: "total_chat_session", value: "52", icon: chatIcon },
  { id: 6, title: "engagement_rate", value: "72.21%", icon: engagmentIcon },
];
const salesKPIData = [
  { id: 1, title: "orders", value: "18", icon: orderIcon },
  { id: 2, title: "sales_amount", value: "$11 254", icon: amountIcon },
  { id: 3, title: "average_order", value: "77", icon: averageOrderIcon },
  { id: 4, title: "conversion_rate", value: "23", icon: engagmentIcon },
];

export function Analysis() {
  const {
    anaylysisSection,
    mainContainer,
    headingWrapper,
    headingContainer,
    eventInfoContainer,
    logoContainer,
    logoBox,
    eventInfo,
    linkContainer,
    salesContainer,
    valueContainer,
    reportContainer,
  } = styles;
  const { t } = useTranslation("analysis");
  return (
    <section className={anaylysisSection}>
      <DashboardLayout navText="Anaylysis">
        <div className={mainContainer}>
          <div className={headingWrapper}>
            <div className={headingContainer}>
              <Link href="/events">
                <Image src={leftArrowIcon} alt="arrow" />
                <TextSm text="Go back to events" />
              </Link>
            </div>
            <div>
              <OutlineBtn
                width="18rem"
                height="5rem"
                text="Download Report"
                icon={downloadIcon}
              />
            </div>
          </div>
          <div className={eventInfoContainer}>
            <div>
              <EventTag />
              <div className={logoContainer}>
                <div className={logoBox}>
                  <p>Logo</p>
                </div>
                <div className={eventInfo}>
                  <TextSm text="Date" color="#777777" fontWeight="400" />
                  <TextLg text="Friday, May 20, 2021" />
                  <TextSm text="at 5:30 PM" color="#777777" fontWeight="400" />
                </div>
              </div>
            </div>
            <div>
              <div className={eventInfo}>
                <TextSm text={t("event")} color="#777777" fontWeight="400" />
                <TextLg text="Shahin’s Event" />
                <div className={linkContainer}>
                  <Image src={copyIcon} alt="copy-icon" />
                  <Link href="http://www.jumble.tv/summer_live">
                    http://www.jumble.tv/summer_live
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className={eventInfo}>
                <TextSm text={t("duration")} color="#777777" fontWeight="400" />
                <TextSm text="00:03:30 " color="black" fontWeight="400" />
              </div>
            </div>
          </div>

          <div className={salesContainer}>
            <AnalysisChart />
            <div className={reportContainer}>
              <div className={valueContainer}>
                <TextXl text="Engagement KPI" color="black" />
                <ReportList reportData={engagementKPIData} />
              </div>
              <div className={valueContainer}>
                <TextXl text="Sales KPI" color="black" />
                <ReportList reportData={salesKPIData} />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </section>
  );
}

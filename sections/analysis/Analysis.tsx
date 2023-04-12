import styles from "./Analysis.module.scss";
import { DashboardLayout } from "layout/dashboardLayout/DashboardLayout";
import downloadIcon from "assets/icons/download.svg";
import { OutlineBtn } from "common/buttons/outlineBtn/OutlineBtn";
import { TextXl } from "common/texts/textXl/TextXl";
import { ReportList } from "components/lists/reportList/ReportList";
import { AnalysisChart } from "components/charts/analysisChart/AnalysisChart";
import { useTranslation } from "next-i18next";
import { engagementKPIData, salesKPIData } from "data/analysisData";
import { HeaderLayout } from "layout/headerLayout/HeaderLayout";
import { EventHeader } from "components/headers/eventHeader/EventHeader";

export function Analysis() {
  const {
    anaylysisSection,
    mainContainer,
    salesContainer,
    valueContainer,
    reportContainer,
  } = styles;
  const { t } = useTranslation("analysis");
  return (
    <section className={anaylysisSection}>
      <DashboardLayout navText="Anaylysis">
        <div className={mainContainer}>
          <HeaderLayout>
            <div>
              <OutlineBtn
                width="18rem"
                height="5rem"
                text="Download Report"
                icon={downloadIcon}
              />
            </div>
          </HeaderLayout>

          <EventHeader
            heading="Duration"
            text="00:03:30"
            date="Friday, May 20, 2021"
            time="5:30 PM"
            eventName="Shahin's Event"
            eventLink="http://www.jumble.tv/summer_live"
          />

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

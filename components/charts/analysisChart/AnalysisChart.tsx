import { ChartTag } from "common/tags/chartTag/ChartTag";
import { TextLg } from "common/texts/textLg/TextLg";
import { TextXs } from "common/texts/textXs/TextXs";
import styles from "./AnalysisChart.module.scss";
import { useTranslation } from "next-i18next";
import { graphData, graphOptions } from "data/graphData";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function AnalysisChart() {
  const {
    nalysisChartContainer,
    chartHeaderContainer,
    textContainer,
    indicatorContainer,
    graphContainer,
  } = styles;
  const { t } = useTranslation("analysis");
  return (
    <div className={nalysisChartContainer}>
      <div className={chartHeaderContainer}>
        <div className={textContainer}>
          <TextXs text={t("event_performance")} color="white" />
          <TextLg text={t("sales_funnel")} color="white" />
          <TextXs text={t("based_unique_viewers")} color="white" />
        </div>
        <div className={indicatorContainer}>
          <div>
            <ChartTag bg="#48C9FF" />
            <p>{t("bag_flow")}</p>
          </div>
          <div>
            <ChartTag bg="#B2FF1F" />
            <p>{t("buy_flow")}</p>
          </div>
        </div>
      </div>
      <div className={graphContainer}>
        <Bar options={graphOptions} data={graphData} />;
      </div>
    </div>
  );
}

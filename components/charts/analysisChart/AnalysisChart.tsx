import { ChartTag } from "common/tags/chartTag/ChartTag";
import { TextLg } from "common/texts/textLg/TextLg";
import { TextXs } from "common/texts/textXs/TextXs";
import styles from "./AnalysisChart.module.scss";
import { useTranslation } from "next-i18next";

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

export const options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
      labels: {
        color: "white",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      stacked: true,
      grid: {
        color: "black",
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      stacked: true,
      grid: {
        color: "#555555",
      },
      ticks: {
        color: "white",
      },
    },
  },
};

const labels = ["Shipping Infos", "Order Review", "Payment", "Orders"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [30, 25, 16, 20],
      backgroundColor: "#B2FF1F",
      barThickness: 26,
    },
    {
      label: "Dataset 2",
      data: [45, 39, 24, 15],
      backgroundColor: "#48C9FF",
      barThickness: 26,
    },
  ],
};

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
        <Bar options={options} data={data} />;
      </div>
    </div>
  );
}

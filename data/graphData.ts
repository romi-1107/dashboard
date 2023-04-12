const labels = ["Shipping Infos", "Order Review", "Payment", "Orders"];

export const graphData = {
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

export const graphOptions = {
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

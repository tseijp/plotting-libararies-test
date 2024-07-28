import Chart, { ChartConfiguration, ChartData } from "chart.js/auto";
import dataset from "../dataset.json";
import { LABELS, COLORS, dateToMonth } from "../utils";

// Function to prepare the data for Chart.js
function transform(data: { [key: string]: number }): ChartData {
  const labels = Object.keys(data).map(dateToMonth);
  const values = Object.values(data).map((distance) => distance / 1000);

  return {
    labels,
    datasets: [
      {
        data: values,
        label: LABELS.DATASET_LABEL,
        borderColor: COLORS.sooty,
        pointRadius: 0, // Remove points
        tension: 1, // Smooth lines
      },
    ],
  };
}

const chartConfiguration: ChartConfiguration = {
  type: "line",
  data: transform(dataset),
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        }
      },
    },
  },
};

let chart: Chart;

const createChart = (el: HTMLCanvasElement) => {
  if (!el) {
    chart?.destroy();
    return;
  }

  chart = new Chart(el, chartConfiguration);
};

export default function App() {
  return <canvas ref={createChart} />;
}

import Plotly from "plotly.js-dist";
import type { PlotData, Layout } from "plotly.js-dist";
import dataset from "../dataset.json";
import { COLORS } from "../utils";

// Convert dataset to an array of dates and values for Plotly
const x = Object.keys(dataset);
const y = Object.values(dataset);

// Preparing the data for the chart
const data: Partial<PlotData>[] = [
  {
    mode: "lines",
    x,
    y,
    line: {
      color: COLORS.sooty,
    }
  },
];

const layout: Partial<Layout> = {
  title: "Daily Walking Distance Over Time",
  xaxis: {
    showgrid: false, // Hide x-axis grid lines
  },
  yaxis: {
    showgrid: false, // Hide y-axis grid lines
  },
  showlegend: false,
};

// Function to create and update the Plotly chart
const createPlotly = (el: HTMLDivElement | null) => {
  if (el)
    Plotly.newPlot(el, data, layout);
};

// React component using the Plotly chart
export default function App() {
  return <div id="plotly" ref={createPlotly} />;
}

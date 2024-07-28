/**
 * ref
 * https://echarts.apache.org/handbook/en/basics/import/
 * https://echarts.apache.org/examples/en/editor.html?c=line-smooth
 */
import * as echarts from "echarts";
import dataset from "../dataset.json";
import type { ECBasicOption } from "echarts/types/dist/shared";
import { COLORS, dateToMonth } from "../utils";

function transform(data: { [key: string]: number }) {
  const dates = [] as string[];
  const values = [] as number[];
  for (const [date, value] of Object.entries(data)) {
    dates.push(dateToMonth(date));
    values.push(value / 1000);
  }
  return { dates, values };
}

const { dates, values } = transform(dataset);

const option: ECBasicOption = {
  xAxis: {
    type: "category",
    data: dates,
    axisLine: { show: false }, // Hide the axis line
    axisTick: { show: false }, // Hide the axis ticks
  },
  yAxis: {
    type: "value",
    axisLine: { show: false }, // Hide the axis line
    axisTick: { show: false }, // Hide the axis ticks
    splitLine: { show: false }, // Hide the grid lines for Y axis
  },
  series: [
    {
      data: values,
      type: "line",
      smooth: true,
      symbol: "none",
      lineStyle: {
        color: COLORS.sooty, // Use specified color for the line
      },
    },
  ],
};

const createChart = (el: HTMLDivElement | null) => {
  if (!el) return;

  // Create the echarts instance
  const myChart = echarts.init(el);

  // Draw the chart
  myChart.setOption(option);
};

export default function App() {
  return (
    <div
      style={{ width: "100%", maxHeight: "100%", height: "100vh" }}
      ref={createChart}
    />
  );
}

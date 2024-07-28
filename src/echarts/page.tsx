/**
 * ref
 * https://echarts.apache.org/handbook/en/basics/import/
 * https://echarts.apache.org/examples/en/editor.html?c=line-smooth
 */
import * as echarts from "echarts";

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true,
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
      style={{ position: "fixed", width: "100%", height: "100%" }}
      ref={createChart}
    />
  );
}

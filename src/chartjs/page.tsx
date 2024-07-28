import Chart, { ChartConfiguration, ChartData } from "chart.js/auto";

const data: ChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Looping tension",
      data: [65, 59, 80, 81, 26, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

const config: ChartConfiguration = {
  type: "line",
  data,
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100,
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

  chart = new Chart(el, config);
};

function App() {
  return (
    <>
      <canvas ref={createChart} />
    </>
  );
}

export default App;

/**
 * ref: https://plotly.com/javascript/uirevision/
 */
import Plotly from "plotly.js-dist";
import type { PlotlyHTMLElement } from "plotly.js-dist";

const rand = () => Math.random();

const x = [1, 2, 3, 4, 5];

const new_data = (trace: object) => Object.assign(trace, { y: x.map(rand) });

// add random data to three line traces
let data = [
  { mode: "lines", line: { color: "#b55400" } },
  { mode: "lines", line: { color: "#393e46" } },
  { mode: "lines", line: { color: "#222831" } },
].map(new_data);

const layout = {
  title: "User Zoom Persists<br>When uirevision Unchanged",
  uirevision: "true",
  xaxis: { autorange: true },
  yaxis: { autorange: true },
};

let plotly: PlotlyHTMLElement;
let interval: ReturnType<typeof setTimeout>;

const createPlotly = async (el: HTMLDivElement) => {
  if (!el) {
    plotly.remove();
    clearInterval(interval);
    return;
  }

  plotly = await Plotly.react(el.id, data, layout);

  interval = setInterval(function () {
    data = data.map(new_data);

    // user interaction will mutate layout and set autorange to false
    // so we need to reset it to true
    layout.xaxis.autorange = true;
    layout.yaxis.autorange = true;

    // not changing uirevision will ensure that user interactions are unchanged
    // layout.uirevision = rand();

    Plotly.react(el.id, data, layout);
  }, 2500);
};

export default function App() {
  return (
    <div
      style={{ position: "fixed", width: "100%", height: "100%" }}
      id="plotly"
      ref={createPlotly}
    />
  );
}
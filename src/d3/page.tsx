import * as d3 from "d3";
import dataset from "../dataset.json";

// Formatting function
function transform([date, value]: [string, number]) {
  return {
    date: new Date(date),
    value: value / 1000, // Convert meters to kilometers
  };
}

// Convert dataset for D3
const data = Object.entries(dataset).map(transform);

const margin = { top: 20, right: 20, bottom: 30, left: 50 },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;


let svg: d3.Selection<SVGGElement, unknown, HTMLElement, undefined>;

function createD3(el: HTMLDivElement | null) {
  if (!el) {
    svg.remove();
    return;
  }

  // Set up scales
  const x = d3
    .scaleTime()
    .range([0, width])
    .domain(d3.extent(data, (d) => d.date) as [Date, Date]);

  const y = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, (d) => d.value)] as [number, number]);

  // Define the line
  const line = d3
    .line()
    .x((d: any) => x(d.date))
    .y((d: any) => y(d.value))

    .curve(d3.curveMonotoneX); // Smooth the line

  // Append the svg object to the body of the page
  svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Add the X Axis
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g").call(d3.axisLeft(y));

  // Add the line path.
  svg.append("path").datum(data).attr("class", "line").attr("d", line as any);
}

export default function App() {
  return <div ref={createD3} id="chart" />;
}

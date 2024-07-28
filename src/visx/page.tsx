import { scaleTime, scaleLinear } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { curveNatural } from "@visx/curve";
import { Group } from "@visx/group";
import { COLORS } from "../utils"; // Adjust the import path as needed
import dataset from "../dataset.json";

const WIDTH = 250;
const HEIGHT = 200;

function transform([date, value]: [string, number]) {
  return {
    date: new Date(date),
    value: value / 1000, // Convert meters to kilometers
  };
}
// Convert dataset to an array suitable for visx
const data = Object.entries(dataset).map(transform);

// Define scales
const xScale = scaleTime({
  domain: [data[0].date, data[data.length - 1].date],
  range: [0, WIDTH], // Set range based on the component size
});
const yScale = scaleLinear({
  domain: [0, Math.max(...data.map((d) => d.value))],
  range: [HEIGHT, 0], // Set range based on the component size
});

export default function App() {
  return (
    <svg width={WIDTH} height={HEIGHT}>
      <Group left={40} top={10}>
        <LinePath
          data={data}
          curve={curveNatural}
          x={(d) => xScale(d.date) ?? 0}
          y={(d) => yScale(d.value) ?? 0}
          stroke={COLORS.sooty}
          strokeWidth={2}
          shapeRendering="geometricPrecision"
        />
      </Group>
    </svg>
  );
}

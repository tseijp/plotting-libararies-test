/**
 * ref: https://commerce.nearform.com/open-source/victory/gallery/discontinuous-scale
 */
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";
import dataset from "../dataset.json";
import { COLORS, dateToMonth } from "../utils";

function transform([date, value]: [string, number]) {
  return {
    x: dateToMonth(date),
    y: value / 1000,
  };
}

const data = Object.entries(dataset).map(transform);

function App() {
  return (
    <VictoryChart polar={false}>
      <VictoryAxis
        fixLabelOverlap={true} // Prevents overlapping of labels
      />
      <VictoryAxis
        dependentAxis
        style={{
          axisLabel: { padding: 35 },
          grid: { stroke: "none" }, // Hide grid lines
        }}
      />
      <VictoryLine
        interpolation="catmullRom"
        data={data}
        style={{ data: { stroke: COLORS.sooty, strokeWidth: 0.5 } }}
      />
    </VictoryChart>
  );
}

export default App
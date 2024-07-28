/**
 * ref: https://commerce.nearform.com/open-source/victory/gallery/discontinuous-scale
 */
import { VictoryChart, VictoryLine, VictoryScatter } from "victory";

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
  { x: 3, y: 4 },
  { x: 4, y: 3 },
  { x: 5, y: 5 },
];

function App() {
  return (
    <div>
      <VictoryChart polar={false}>
        <VictoryLine
          interpolation="catmullRom"
          data={data}
          style={{ data: { stroke: "#c43a31" } }}
        />
        <VictoryScatter
          data={data}
          size={5}
          style={{ data: { fill: "#c43a31" } }}
        />
      </VictoryChart>
    </div>
  );
}

export default App
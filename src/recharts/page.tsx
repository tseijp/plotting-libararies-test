import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import dataset from "../dataset.json";
import { COLORS } from "../utils";

function transform([date, value]: [string, number]) {
  return {
    date,
    Distance: value / 1000, // Converting meters to kilometers
  };
}

// Convert the dataset for use with Recharts
const data = Object.entries(dataset).map(transform);

export default function App() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Tooltip />
        <XAxis dataKey="date" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="Distance"
          stroke={COLORS.carbon}
          dot={false}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const createData = () => {
  const uv = Math.floor(Math.random() * 2400);
  const pv = Math.floor(Math.random() * 2400);
  return { name: "", uv, pv, amt: pv };
};

const data = Array.from({ length: 25 }, createData);

export default function App() {
  return (
    <LineChart width={1280} height={800} data={data} accessibilityLayer>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
}

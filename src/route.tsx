import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";

import ChartJSPage from "./chartjs/page";
import D3Page from "./d3/page";
import EchartsPage from "./echarts/page";
import RechartsPage from "./recharts/page";
import PlotlyPage from "./plotly/page";
import ThreePage from "./three/page";
import VisxPage from "./visx/page";
import VictoryPage from "./victory/page";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

const Links = () => {
  return (
    <ul>
      {routes.map(({ path }) =>
        path === "/" ? null : (
          <li key={path}>
            <a href={path} style={{ color: "black" }}>
              {path}
            </a>
          </li>
        )
      )}
    </ul>
  );
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Links />,
  },
  {
    path: "/chartjs",
    element: <ChartJSPage />,
  },
  {
    path: "/d3",
    element: <D3Page />,
  },
  {
    path: "/echarts",
    element: <EchartsPage />,
  },
  {
    path: "/plotly",
    element: <PlotlyPage />,
  },
  {
    path: "/recharts",
    element: <RechartsPage />,
  },
  {
    path: "/three",
    element: <ThreePage />,
  },
  {
    path: "/victory",
    element: <VictoryPage />,
  },
  {
    path: "/visx",
    element: (
      <ParentSize>
        {({ width, height }) => <VisxPage width={width} height={height} />}
      </ParentSize>
    ),
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

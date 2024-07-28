import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import ChartJSPage from "./chartjs/page";
import D3Page from "./d3/page";
import EchartsPage from "./echarts/page";
import RechartsPage from "./recharts/page";
import PlotlyPage from "./plotly/page";
import ThreePage from "./three/page";
import VisxPage from "./visx/page";
import VictoryPage from "./victory/page";

function Header() {
  return (
    <ul className="flex header">
      {routes.map(({ path }) => (
        <li key={path} className="link">
          <a href={path}>{path === "/" ? "root" : path?.replace("/", "")}</a>
        </li>
      ))}
    </ul>
  );
}

function Links() {
  return (
    <ul className="flex flex-col gap-10">
      {routes.map(({ path, element }) =>
        path === "/" ? null : (
          <li key={path} className="flex">
            <div className="container">{element}</div>
            <a href={path} style={{ color: "black" }}>
              {path?.replace("/", "")}
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
    element: <VisxPage />,
  },
  {
    path: "/d3",
    element: <D3Page />,
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <main>
      <Header />
      <RouterProvider router={router} />
    </main>
  );
};

export default App;

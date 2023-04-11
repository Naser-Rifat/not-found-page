import "./App.css";
import { NotFoundPage01 } from "./Pages/NotFoundPage01";
import HomePage from "./Pages/HomePage";
import { NotFoundPage02 } from "./Pages/NotFoundPage02";
import { NotFoundPage03 } from "./Pages/NotFoundPage03";
import { useRoutes } from "react-router-dom";

function App() {
  const routes = [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "404-page-01",
      element: <NotFoundPage01 />,
    },
    {
      path: "404-page-02",
      element: <NotFoundPage02 />,
    },
    {
      path: "404-page-03",
      element: <NotFoundPage03 />,
    },
  ];
  const allRoutes = useRoutes(routes);
  return <div>{allRoutes}</div>;
}

export default App;

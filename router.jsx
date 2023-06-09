import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/layouts/layout";
import Home from "./src/pages/home";
import Studio from "./src/pages/studio";
import Clases from "./src/pages/clases";
import Crew from "./src/pages/crew";
import Crews from "./src/pages/crews";
import Llegue from "./src/pages/llegue";
import Entretenimiento from "./src/pages/entretenimiento";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/estudio",
        element: <Studio />,
      },
      {
        path: "/clases",
        element: <Clases />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/crews",
        element: <Crews />,
      },
      {
        path: "/llegue",
        element: <Llegue />,
      },
      {
        path: "/entretenimiento",
        element: <Entretenimiento />,
      },
    ],
  },
]);
export default router;

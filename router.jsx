import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/layouts/layout";
import Home from "./src/pages/home";
import Studio from "./src/pages/studio";
import Clases from "./src/pages/clases";
import Crew from "./src/pages/crew";

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
    ],
  },
]);
export default router;

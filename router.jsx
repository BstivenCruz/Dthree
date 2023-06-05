import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/layouts/layout";
import Home from "./src/pages/home";
import Studio from "./src/pages/studio";

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
        path: "/studio",
        element: <Studio />,
      },
    ],
  },
]);
export default router;

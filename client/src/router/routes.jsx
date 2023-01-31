import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic, Sign, NotFound, Products } from "../pages/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Sign />,
      },
      {
        path: "/:user",
        element: <Products />,
      },
      {
        path: "/analysis",
        element: <Products />,
      },
    ],
  },
]);

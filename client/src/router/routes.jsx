import { createBrowserRouter } from "react-router-dom";
import { SignUp, SignIn, ProtectedRoute } from "../components/index";
import Analysis from "../pages/Analysis";
import { LayoutPublic, NotFound, Products } from "../pages/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/analysis",
            element: <Analysis />,
          },
        ],
      },
    ],
  },
]);

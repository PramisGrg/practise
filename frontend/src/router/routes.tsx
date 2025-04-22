import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Applayout from "../layout/app-layout";
import Table from "../pages/table";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

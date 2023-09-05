import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Category from "./../components/Category/Category";
import Product from "./../components/Products/Product/Product";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <Category />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

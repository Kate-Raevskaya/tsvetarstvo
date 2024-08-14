import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import { AllProducts } from "../pages/AllProducts/AllProducts"
import { Catalog } from "../pages/catalog/Catalog"
import { Home } from "../pages/home/Home"
import { Product } from "../pages/product/Product"
import { Products } from "../pages/products/Products"
import { Type } from "../pages/type/Type"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalog",
        element: <Catalog />,
        children: [
          { index: true, element: <AllProducts /> },
          {
            path: "category/:id",
            element: <Products />,
          },
        ],
      },
      { path: "product/:productId", element: <Product /> },
      { path: "type/:productType", element: <Type /> },
    ],
  },
])

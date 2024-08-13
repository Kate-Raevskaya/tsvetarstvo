import { createBrowserRouter } from "react-router-dom"

import App from "../App"
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
        path: "catalog?featured=1",
        element: <Catalog />,
        children: [
          { index: true, element: <p>All Products</p> },
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

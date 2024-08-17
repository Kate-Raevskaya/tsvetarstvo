import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop"
import { NotFound } from "../pages/notFound/NotFound"

let Home = lazy(() => import("../pages/home/Home"))
let Catalog = lazy(() => import("../pages/catalog/Catalog"))
let AllProducts = lazy(() => import("../pages/AllProducts/AllProducts"))
let Products = lazy(() => import("../pages/products/Products"))
let Variants = lazy(() => import("../pages/variants/Variants"))
let Subcategories = lazy(() => import("../pages/subcategories/Subcategories"))
let Product = lazy(() => import("../pages/product/Product"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    errorElement: <NotFound />,
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
          {
            path: "variants",
            element: <Variants />,
          },
          {
            path: "subcategories/:id",
            element: <Subcategories />,
          },
        ],
      },
      { path: "product/:id", element: <Product /> },
    ],
  },
])

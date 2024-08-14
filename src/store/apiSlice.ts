import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { transformProductApiV1Data } from "../helpers/data-transform"
import type { Category, Product } from "../types/types"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/" }),
  endpoints: builder => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => ({
        url: "categories",
      }),
    }),
    getAllProducts: builder.query<Product[], void>({
      query: () => ({
        url: "products",
      }),
      transformResponse: transformProductApiV1Data,
    }),
    getAllFeaturedProducts: builder.query<Product[], void>({
      query: () => ({
        url: "products?featured=1",
      }),
      transformResponse: transformProductApiV1Data,
    }),
  }),
})

export const {
  useGetAllCategoriesQuery,
  useGetAllFeaturedProductsQuery,
  useGetAllProductsQuery,
} = apiSlice

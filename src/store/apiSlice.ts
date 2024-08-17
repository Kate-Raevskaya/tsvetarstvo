import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { transformProductApiV1Data } from "../helpers/data-transform"
import type { Category, Product, Variant } from "../types/types"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/v1/" }),
  endpoints: builder => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => ({
        url: "categories",
      }),
    }),
    getAllProducts: builder.query<Product[], boolean>({
      query: featured => {
        if (featured) {
          return "products?featured=1"
        }
        return "products"
      },
      transformResponse: transformProductApiV1Data,
    }),
    getAllProductsBySize: builder.query<
      Variant[],
      { size: string; categoryId?: number }
    >({
      query: ({ size, categoryId }) => {
        if (categoryId && !isNaN(categoryId)) {
          return `variants?attribute=size:${size}&category=${categoryId}`
        }
        return `variants?attribute=size:${size}`
      },
    }),
    getAllVariationsForSingleProduct: builder.query<Variant[], number>({
      query: id => ({
        url: `products/${id}/variants`,
      }),
    }),
    getProductsFromCategory: builder.query<Product[], number>({
      query: id => ({
        url: `products?category=${id}`,
      }),
    }),
    getSubcategories: builder.query<Category[], number>({
      query: id => ({
        url: `categories?parent=${id}`,
      }),
    }),
  }),
})

export const {
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
  useGetAllProductsBySizeQuery,
  useGetAllVariationsForSingleProductQuery,
  useGetProductsFromCategoryQuery,
  useGetSubcategoriesQuery,
} = apiSlice

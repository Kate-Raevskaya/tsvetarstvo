import { Product, ProductApiV1, Variant } from "../types/types"

export function transformProductApiV1Data(product: ProductApiV1[]): Product[] {
  return product.map(product => {
    let price = ""
    if (product.variants.length === 1) {
      price = `${product.variants[0].price}`
    } else {
      let prices: number[] = []
      for (let variant of product.variants) {
        prices.push(variant.price)
      }
      let minPrice = Math.min(...prices)
      let maxPrice = Math.max(...prices)
      price = `${minPrice} - ${maxPrice}`
    }

    return { ...product, price: price }
  })
}

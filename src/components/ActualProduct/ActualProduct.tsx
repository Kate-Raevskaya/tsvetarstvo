import { useGetAllFeaturedProductsQuery } from "../../store/apiSlice"
import { ProductCard } from "../ProductCard/ProductCard"

export const ActualProduct = () => {
  let { data: product = [], isLoading } = useGetAllFeaturedProductsQuery()
  return (
    <div className="actual-product-container">
      {isLoading ? (
        <p>Loaiding...</p>
      ) : (
        product.map(product => <ProductCard product={product} />)
      )}
    </div>
  )
}

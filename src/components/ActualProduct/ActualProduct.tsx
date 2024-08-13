import { useNavigate } from "react-router-dom"

import { useGetAllFeaturedProductsQuery } from "../../store/apiSlice"
import { ProductCard } from "../ProductCard/ProductCard"

export const ActualProduct = () => {
  let { data: product = [], isLoading } = useGetAllFeaturedProductsQuery()

  let navigate = useNavigate()

  return (
    <div className="actual-product-container">
      {isLoading ? (
        <p>Loaiding...</p>
      ) : (
        product.map(product => <ProductCard product={product} />)
      )}
      <button
        className="all-actual-product-button"
        onClick={() => {
          navigate(`/catalog?featured=1`)
        }}
      >
        Смотреть еще
      </button>
    </div>
  )
}

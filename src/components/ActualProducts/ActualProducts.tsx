import { useNavigate } from "react-router-dom"

import { useGetAllProductsQuery } from "../../store/apiSlice"
import { ProductCard } from "../ProductCard/ProductCard"

export const ActualProducts = () => {
  let { data: product = [], isLoading } = useGetAllProductsQuery(true)

  let navigate = useNavigate()

  return (
    <div className="actual-product-container">
      {isLoading ? (
        <p>Loaiding...</p>
      ) : (
        product.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
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

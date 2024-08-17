import { NavLink, useSearchParams } from "react-router-dom"

import { ProductCard } from "../../components/ProductCard/ProductCard"
import { Sizes } from "../../components/Sizes/Sizes"
import { useGetAllProductsQuery } from "../../store/apiSlice"

const AllProducts = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  let featured = !!(searchParams.get("featured") || "")

  let { data: products = [], isLoading } = useGetAllProductsQuery(featured)

  return (
    <div className="all-products">
      {featured ? null : <Sizes id={NaN} />}
      <div className="all-products-container">
        <div className="products">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts

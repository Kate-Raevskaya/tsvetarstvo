import { NavLink, useSearchParams } from "react-router-dom"

import { Sizes } from "../../components/Sizes/Sizes"
import { VariantCard } from "../../components/VariantCard/VariantCard"
import { useGetAllProductsBySizeQuery } from "../../store/apiSlice"

const Variants = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  let sizeApi = searchParams.get("attribute") || ""
  let size = sizeApi[sizeApi.length - 1]

  let category = searchParams.get("category") || ""
  let categoryId = parseInt(category)

  let { data: variants = [], isLoading } = useGetAllProductsBySizeQuery({
    size,
    categoryId,
  })
  return (
    <div className="all-variants-container">
      <Sizes id={categoryId} />
      {variants.length === 0 ? (
        <div className="product-not-found">
          <p>Продукты в данном размере не представлены на сайте</p>
          <p>Но возможно они уже приехали в наш офлайн магазин</p>
          <NavLink to={"https://wa.me/79219035677"} target="_blank">
            Связаться для заказа
          </NavLink>
        </div>
      ) : (
        <div className="all-variants">
          {variants.map(variant => (
            <VariantCard key={variant.id} variant={variant} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Variants

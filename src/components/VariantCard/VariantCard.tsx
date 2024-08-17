import { NavLink } from "react-router-dom"

import { useGetAllVariationsForSingleProductQuery } from "../../store/apiSlice"
import type { Variant } from "../../types/types"

type Props = {
  variant: Variant
}

export const VariantCard = ({ variant }: Props) => {
  let { data: variants = [], isLoading } =
    useGetAllVariationsForSingleProductQuery(variant.product_id)

  let link = ""

  if (variants.length === 1) {
    link = `/product/${variant.product_id}`
  } else {
    link = `/product/${variant.product_id}?variant=${variant.id}`
  }

  return (
    <div className="variant-card">
      <NavLink to={link}>
        <div className="product-image">
          <img src={variant.image} alt="product" />
        </div>
        <div className="product-disc">
          <p>{variant.name}</p>
          <p>{variant.price}</p>
        </div>
      </NavLink>
    </div>
  )
}

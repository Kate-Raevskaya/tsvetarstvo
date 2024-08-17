import { NavLink } from "react-router-dom"

import type { Product } from "../../types/types"
import "./ProductCard.scss"

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  let productLink = ""

  if (product.variants.length === 1) {
    productLink = `/product/${product.id}`
  } else {
    productLink = `/product/${product.id}?variant=${product.variants[0].id}`
  }

  return (
    <div className="product-card">
      <NavLink to={productLink}>
        <div className="product-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="product-disc">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </NavLink>
    </div>
  )
}

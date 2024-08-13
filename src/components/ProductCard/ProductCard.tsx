import { NavLink } from "react-router-dom"

import { Product } from "../../types/types"

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card">
      <NavLink to={`/catalog/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt="product image" />
        </div>
        <div className="product-disc">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </NavLink>
    </div>
  )
}

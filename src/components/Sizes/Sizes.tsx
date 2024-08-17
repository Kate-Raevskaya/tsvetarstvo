import { NavLink } from "react-router-dom"

type Props = {
  id: number
}

export const Sizes = ({ id }: Props) => {
  return (
    <div className="product-size">
      <NavLink to={`/catalog/variants?attribute=size:s&category=${id}`}>
        S
      </NavLink>
      <NavLink to={`/catalog/variants?attribute=size:m&category=${id}`}>
        M
      </NavLink>
      <NavLink to={`/catalog/variants?attribute=size:l&category=${id}`}>
        L
      </NavLink>
    </div>
  )
}

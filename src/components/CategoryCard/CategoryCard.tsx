import { NavLink } from "react-router-dom"

import { Category } from "../../types/types"
import "./CategoryCard.scss"

type Props = {
  category: Category
}

export const CategoryCard = ({ category }: Props) => {
  return (
    <div className="category-card">
      <NavLink to={`/catalog/category/${category.id}`}>
        <div className="category-image">
          <img src={category.img} alt="caterogy image" />
        </div>
        <div className="category-disc">
          <p>{category.name}</p>
          <p>Перейти...</p>
        </div>
      </NavLink>
    </div>
  )
}

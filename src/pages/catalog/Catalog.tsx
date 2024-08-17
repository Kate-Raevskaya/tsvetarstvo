import { NavLink, Outlet } from "react-router-dom"

import { useGetAllCategoriesQuery } from "../../store/apiSlice"
import type { Category } from "../../types/types"

type Props = {
  categories: Category[]
}

const Catalog = () => {
  let { data: categories = [], isLoading } = useGetAllCategoriesQuery()

  return (
    <div className="catalog-container">
      <div className="categories-name">
        <NavLink to={""}>Все товары</NavLink>
        <NavLink to={".?featured=1"}>Актуальное</NavLink>
        <Categories categories={categories} />
      </div>
      <Outlet />
    </div>
  )
}

const Categories = ({ categories }: Props) => {
  return (
    <>
      {categories.map(category => {
        let categoryLink = ""
        if (category.subcategories.length > 0) {
          categoryLink = `subcategories/${category.id}`
        } else {
          categoryLink = `category/${category.id}`
        }
        return (
          <NavLink key={category.id} to={categoryLink}>
            {category.name}
          </NavLink>
        )
      })}
    </>
  )
}

export default Catalog

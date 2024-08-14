import { NavLink, Outlet } from "react-router-dom"

import { useGetAllCategoriesQuery } from "../../store/apiSlice"

export const Catalog = () => {
  let { data: categories = [], isLoading } = useGetAllCategoriesQuery()
  return (
    <div className="catalog-container">
      <div className="categories-name">
        <NavLink to={"catalog"}>Все товары</NavLink>
        <NavLink to={"catalog?featured=1"}>Актуальное</NavLink>
        {categories.map(category => (
          <NavLink key={category.id} to={`category/${category.id}`}>
            {category.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

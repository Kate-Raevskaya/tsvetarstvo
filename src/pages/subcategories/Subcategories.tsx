import { NavLink, useParams } from "react-router-dom"

import { Sizes } from "../../components/Sizes/Sizes"
import { useGetSubcategoriesQuery } from "../../store/apiSlice"
import { Category } from "../../types/types"

type Props = {
  subcategories: Category[]
}

const Subcategories = () => {
  let { id = "" } = useParams()
  let categoryId = parseInt(id)

  let { data: subcategories = [], isLoading } =
    useGetSubcategoriesQuery(categoryId)

  return (
    <div className="subcat-container">
      <Sizes id={categoryId} />
      <div className="subcat-list">
        <SubcategoriesList subcategories={subcategories} />
      </div>
    </div>
  )
}

const SubcategoriesList = ({ subcategories }: Props) => {
  return (
    <>
      {subcategories.map(subcategory => {
        let categoryLink = ""
        if (subcategory.subcategories.length > 0) {
          categoryLink = `/catalog/subcategory/${subcategory.id}`
        } else {
          categoryLink = `/catalog/category/${subcategory.id}`
        }
        return (
          <NavLink key={subcategory.id} to={categoryLink}>
            <div className="subcat-img">
              <img src={subcategory.img} alt="subcategory" />
            </div>
            {subcategory.name}
          </NavLink>
        )
      })}
    </>
  )
}

export default Subcategories

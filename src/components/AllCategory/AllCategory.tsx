import { useGetAllCategoriesQuery } from "../../store/apiSlice"
import { CategoryCard } from "../CategoryCard/CategoryCard"

export const AllCategory = () => {
  let { data: categories = [], isLoading } = useGetAllCategoriesQuery()
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))
      )}
    </>
  )
}

import { NavLink, useParams } from "react-router-dom"

import { ProductCard } from "../../components/ProductCard/ProductCard"
import { Sizes } from "../../components/Sizes/Sizes"
import { useGetProductsFromCategoryQuery } from "../../store/apiSlice"

const Products = () => {
  let { id = "" } = useParams()
  let categoryId = parseInt(id)

  let { data: products = [], isLoading } =
    useGetProductsFromCategoryQuery(categoryId)

  return (
    <div className="category-product-container">
      {products.length === 0 ? (
        <div className="product-not-found">
          <p>Товаров из этой категории временно нет на сайте</p>
          <p>Но мы можем собрать для вас нужную композицию</p>
          <NavLink to={"https://wa.me/79219035677"} target="_blank">
            Связаться для заказа
          </NavLink>
        </div>
      ) : (
        <>
          <Sizes id={categoryId} />
          <div className="category-products">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Products

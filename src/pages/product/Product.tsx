import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom"

import { useGetAllVariationsForSingleProductQuery } from "../../store/apiSlice"
import type { Variant } from "../../types/types"

type Props = {
  variants: Variant[]
}

const Product = () => {
  let navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()
  let variant = parseInt(searchParams.get("variant") || "")

  let { id = "" } = useParams()
  let productId = parseInt(id)

  let { data: variants = [], isLoading } =
    useGetAllVariationsForSingleProductQuery(productId)

  if (isLoading) {
    return <></>
  }

  let variantId = Number.isNaN(variant) ? variants[0].id : variant
  let currentVariant = variants.find(variant => variant.id === variantId)

  if (currentVariant === undefined) {
    throw new Error("Variant not found")
  }

  return (
    <div className="product-page-container">
      <button
        className="go-back-button"
        onClick={() => {
          navigate(-1)
        }}
      >
        Назад
      </button>
      {Number.isNaN(variant) ? null : <ProductSize variants={variants} />}
      <div className="current-variant">
        <div className="variant-image">
          <img src={currentVariant.image} alt="product" />
        </div>
        <div className="variant-desc">
          <p>{currentVariant.name}</p>
          <p>{currentVariant.price}</p>
          <NavLink to={"https://wa.me/79219035677"} target="_blank">
            Связаться для покупки
          </NavLink>
          <p>Описание\доп.информация</p>
        </div>
      </div>
    </div>
  )
}

const ProductSize = ({ variants }: Props) => {
  let variantSizes = variants.map(variant => {
    return {
      id: variant.id,
      attribute: variant.attributes.find(
        attribute => attribute.name === "size",
      ),
    }
  })

  return (
    <div className="product-size">
      {variantSizes.map(variant => {
        if (variant.attribute === undefined) {
          return <p>Что-то пошло не так</p>
        }
        return (
          <NavLink
            replace={true}
            key={variant.id}
            to={`.?variant=${variant.id}`}
            className={`size-${variant.attribute.value}`}
          >
            {variant.attribute.value.toUpperCase()}
          </NavLink>
        )
      })}
    </div>
  )
}

export default Product

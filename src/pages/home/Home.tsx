import { AllCategory } from "../../components/AllCategory/AllCategory"
import { Contacts } from "../../components/Contacts/Contacts"
import { Decor } from "../../components/Decor/Decor"
import { Delivery } from "../../components/Delivery/Delivery"

export const Home = () => {
  return (
    <>
      <h1>Цветарство</h1>

      <section className="category-section">
        <h2>Категории</h2>
        <AllCategory />
      </section>

      <section className="decor-section">
        <h2>Оформление</h2>
        <Decor />
      </section>

      <section className="delivery-payment-section">
        <h2>Доставка и оплата</h2>
        <Delivery />
      </section>

      <section className="contacts-section">
        <h2>Контакты</h2>
        <Contacts />
      </section>
    </>
  )
}

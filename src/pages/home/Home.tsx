import { AllCategory } from "../../components/AllCategory/AllCategory"
import { Contacts } from "../../components/Contacts/Contacts"
import { Decor } from "../../components/Decor/Decor"
import { Delivery } from "../../components/Delivery/Delivery"
import "./Home.scss"

export const Home = () => {
  return (
    <div className="home-page">
      <h1>Цветарство</h1>

      <section id="catalog-section">
        <h2>Каталог</h2>
        <AllCategory />
      </section>

      <section id="decor-section">
        <h2>Оформление</h2>
        <Decor />
      </section>

      <section id="delivery-section">
        <h2>Доставка и оплата</h2>
        <Delivery />
      </section>

      <section id="contacts-section">
        <h2>Контакты</h2>
        <Contacts />
      </section>
    </div>
  )
}

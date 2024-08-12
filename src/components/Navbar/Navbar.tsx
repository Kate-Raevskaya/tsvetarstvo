import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import "./Navbar.scss"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink className="navlink" to={"/"}>
          Цветарство
        </NavLink>
      </div>
      <div className="nav-menu">
        <HashLink to={"/#catalog-section"}>Каталог</HashLink>
        <HashLink to="/#decor-section">Декор</HashLink>
        <HashLink to={"/#delivery-section"}>Доставка/Оплата</HashLink>
        <HashLink to={"/#contacts-section"}>Контакты</HashLink>
      </div>
      <div className="nav-contacts">
        <a href="https://t.me/Tsvetarstvo">Telegram</a>
        <a href="tel:79219035677">Telephone</a>
        <a href="https://wa.me/79219035677">WhatsApp</a>
      </div>
    </nav>
  )
}

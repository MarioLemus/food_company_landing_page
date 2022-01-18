import { NavLink } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";
import "../_styles/products_sidebar.css";
import NavElement from "./NavElement";

export default function ProductsSidebar() {
  return (
    <div className="products_sidebar__list">
      <h1 className="products_sidebar__title">Principales productos</h1>
      <NavElement title="salchichas" url="/catalogo-productos-salchichas" />
      <NavElement title="jamones" url="/catalogo-productos-jamon" />
      <NavElement title="chorizo" url="/catalogo-productos-chorizo" />
      <NavElement title="mortadela" url="/catalogo-productos-mortadela" />
      <NavElement title="cerdo" url="/catalogo-productos-cerdo" />

      <div className="products_sidebar__social_network_container">
        <SocialNetwork />
      </div>
    </div>
  );
}

import "../_styles/hero.css";
import { Link } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="hero__container">
      <div className="hero__title_image_container">
        <h1 className="hero__title">
          Productos alimenticios de
          <span className="hero__span"> alta calidad</span>
        </h1>
        <div className="hero__button_container">
          <div className="hero__social_contact">
            CONTÁCTANOS
            <HiArrowNarrowRight className="hero__icon" />
            <SocialNetwork />
          </div>
          <Link to="/catalogo-productos-salchichas" className="hero__button">
            Ver catalogo
          </Link>
        </div>
      </div>
      <div className="hero__image_container">
        <img
          className="hero__image"
          src="img/si-ham-sausage-pan-removebg.png"
          alt="si-ham-pan"
        />
      </div>
    </section>
  );
}

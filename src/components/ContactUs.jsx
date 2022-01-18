import "../_styles/contact_us.css";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import Map from "./Map";
import SocialNetwork from "./SocialNetwork";

export default function CountactUs() {
  return (
    <section className="contact_us__section_container">
      {/* <h2 className="contact_us__title">Ponte en contacto con nosotros!</h2> */}
      <div className="contact_us__container">
        <div className="contact_us__input_container">
          {/* <div>
            <label className="contact_us__label">NOMBRE *</label>
            <input className="contact_us__input" type="text" />
          </div>
          <div>
            <label>CORREO *</label>
            <input className="contact_us__input" type="text" />
          </div>
          <div>
            <label>TELEFONO *</label>
            <input className="contact_us__input" type="text" />
          </div>
          <div>
            <label>MENSAJE *</label>
            <textarea
              className="contact_us__textarea"
              id=""
              cols="3"
              rows="5"
            ></textarea>
          </div>
          <div>
            <button className="contact_us__button">enviar mensaje</button>
          </div> */}
          <div>
            <h3 className="contact_us__title">Información de contacto</h3>
          </div>
          <section className="contact_us__data_container">
            <GoLocation className="contact_us__icon" />
            <p>
              Calle L-3, Boulevard Si-Ham, Polígono 17 A y B, Zona Industrial
              Merliot, Antiguo Cuscatlán, La Libertad, El Salvador
            </p>
          </section>

          <section className="contact_us__data_container">
            <FiPhoneCall className="contact_us__icon" />
            <p>(+503) 2560 3315 | (+503) 2560 3301 | (+503) 2560 3316</p>
            <a href="https://www.paginasamarillas.com.sv/empresas/si-ham/santa-tecla-7438874">
              Contáctanos gratis a través de internet
            </a>
          </section>
          <div>
            <SocialNetwork />
          </div>
        </div>
        <Map />
      </div>
    </section>
  );
}

import "../_styles/map.css";

export default function Map() {
  return (
    <div className="map__container">
      <div className="map__title_container">
        <h2 className="map__title">
          ¿Eres propietario de una empresa o estas por organizar un evento?
        </h2>
        <p className="map__subtitle">
          ¡Ponte en contacto con nosotros, con gusto te atenderemos!
        </p>
      </div>
      <div className="map__iframe_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7753.431221517685!2d-89.260708!3d13.675049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35ae173ab21af6d0!2sProductos%20Alimenticios%20Si-Ham!5e0!3m2!1ses-419!2ssv!4v1639790674487!5m2!1ses-419!2ssv"
          className="map"
          allowfullscreen="true"
          title="map"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

import "../_styles/social_network.css";

export default function SocialNetwork() {
  return (
    <section className="social_network__data_container">
      <a
        target="_blank"
        rel="noreferrer"
        className="social_network__logo"
        href="https://es-la.facebook.com/SiHamElSalvador/"
      >
        <img src="img/logo/facebook.png" alt="facebook_logo" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="social_network__logo"
        href="https://www.instagram.com/distribuidorasiham/?hl=es-la"
      >
        <img src="img/logo/instagram.png" alt="instagram_logo" />
      </a>
    </section>
  );
}

import "../_styles/card.css";

export default function Card({ title, imgSrc }) {
  return (
    <div className="card__container">
      <img src={imgSrc} alt="product" />
      <p>{title}</p>
    </div>
  );
}

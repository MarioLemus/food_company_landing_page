import Card from "./Card";
import "../_styles/products_extra_info.css";

export default function ProductsExtraInfo() {
  return (
    <>
      <h2 className="products_extra_info__title">
        ¿Qué caracteriza a <span>Si-Ham</span>?
      </h2>
      <div className="products_extra_info__container">
        <Card
          imgSrc={"img/card_img/discount-tago.png"}
          title={"Precios altamente competitivos"}
        />
        <Card
          imgSrc={"img/card_img/quality-controlo.png"}
          title={"Productos con un alto estándar de calidad"}
        />
        <Card
          imgSrc={"img/card_img/shopping-cartoo.png"}
          title={"Disponibilidad inmediata en supermercados"}
        />
      </div>
    </>
  );
}

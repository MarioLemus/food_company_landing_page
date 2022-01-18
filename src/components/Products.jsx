import "../_styles/products.css";
import ProductsSidebar from "../components/ProductsSidebar";
import Card from "./Card";
import {
  salchichasData,
  jamonData,
  chorizoData,
  mortadelaData,
  cerdoData
} from "../productData";
export default function Products({
  isSalchichas,
  isJamon,
  isChorizo,
  isMortadela,
  isCerdo
}) {
  return (
    <section className="products__container">
      <ProductsSidebar />
      <div className="products__grid">
        {isSalchichas &&
          salchichasData.map((e) => (
            <div className="products__card_container">
              <Card key={e.id} title={e.type} imgSrc={e.image_url} />
            </div>
          ))}

        {isJamon &&
          jamonData.map((e) => (
            <div className="products__card_container">
              <Card key={e.id} title={e.type} imgSrc={e.image_url} />
            </div>
          ))}

        {isChorizo &&
          chorizoData.map((e) => (
            <div className="products__card_container">
              <Card key={e.id} title={e.type} imgSrc={e.image_url} />
            </div>
          ))}

        {isMortadela &&
          mortadelaData.map((e) => (
            <div className="products__card_container">
              <Card key={e.id} title={e.type} imgSrc={e.image_url} />
            </div>
          ))}

        {isCerdo &&
          cerdoData.map((e) => (
            <div className="products__card_container">
              <Card key={e.id} title={e.type} imgSrc={e.image_url} />
            </div>
          ))}
      </div>
    </section>
  );
}

import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Seo from "../components/Seo";

export default function ProductList({
  isSalchichas,
  isJamon,
  isChorizo,
  isMortadela,
  isCerdo
}) {
  return (
    <>
      <Seo title="Amplio catalogo de productos alimenticios para fiestas y eventos - Si-Ham" />
      <main>
        <Navbar />
        <Products
          isSalchichas={isSalchichas}
          isJamon={isJamon}
          isChorizo={isChorizo}
          isMortadela={isMortadela}
          isCerdo={isCerdo}
        />
      </main>
    </>
  );
}

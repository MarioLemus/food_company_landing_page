import "../styles.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import CountactUs from "../components/ContactUs";
import ProductsExtraInfo from "../components/ProductsExtraInfo";
import WhyUs from "../components/WhyUs";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Los mejores productos alimenticios para fiestas y eventos, en El Salvador - Si-Ham" />
      <main className="App">
        <Navbar />
        <Hero />
        <ProductsExtraInfo />
        <WhyUs />
        <CountactUs />
      </main>
    </>
  );
}

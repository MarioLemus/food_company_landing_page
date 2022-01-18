import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./normalize.css";
import "./styles.css";
import ProductList from "./pages/ProductList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/catalogo-productos-salchichas"
          element={<ProductList isSalchichas={true} />}
        />
        <Route
          exact
          path="/catalogo-productos-jamon"
          element={<ProductList isJamon={true} />}
        />
        <Route
          exact
          path="/catalogo-productos-chorizo"
          element={<ProductList isChorizo={true} />}
        />
        <Route
          exact
          path="/catalogo-productos-mortadela"
          element={<ProductList isMortadela={true} />}
        />
        <Route
          exact
          path="/catalogo-productos-cerdo"
          element={<ProductList isCerdo={true} />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

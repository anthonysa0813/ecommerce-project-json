import React from "react";
import Products from "./Products";

const ProductPage = ({ product }) => {
  return (
    <main>
      <div className="wrapper">
        <div className="mainContainer">
          <h3>Ofertas del día</h3>
          <Products />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

import React from "react";
import Stars from "simple-rating-stars";
import { formateoPrecio } from "../helper/formateo";
import FetchProduct from "../hooks/FetchProduct";
import { Product } from "../styled/Product";

const Products = () => {
  const { products } = FetchProduct(`http://localhost:4000/products`);

  return products.map((product) => {
    return (
      <Product className="">
        <div className="productImage">
          <img src={product.image} alt="" />
        </div>
        <div className="productInfo">
          <h3>{product.title}</h3>
          <div className="productScores">
            <span>{formateoPrecio(product.price)}</span>
            <span className="discount">{formateoPrecio(product.price)}</span>
            <Stars
              stars={Number(product.score)}
              outOf={5}
              full={"#fff04c"}
              empty={"#E1F1FF"}
              stroke={"#369"}
            />
          </div>
          <p>{product.subdescription}</p>
        </div>
        <div className="productAction ">
          <button>Comprar ahora</button>
          <button>Agregar al carrito</button>
        </div>
      </Product>
    );
  });
};

export default Products;

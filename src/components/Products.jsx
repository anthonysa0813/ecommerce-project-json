import React, { useContext } from "react";
import Stars from "simple-rating-stars";
import { formateoPrecio } from "../helper/formateo";
import FetchProduct from "../hooks/FetchProduct";
import { ProductContext } from "../hooks/ProductHook";
import { Product } from "../styled/Product";

const Products = () => {
  const { productsArr, setProductsArr } = useContext(ProductContext);
  const { carrito, total } = productsArr;
  const { products } = FetchProduct(`http://localhost:4000/products`);

  const addProduct = (product) => {
    setProductsArr({
      ...productsArr,
      carrito: [...carrito, product],
    });
  };

  return products.map((product) => {
    return (
      <Product className="" key={product.id}>
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
          <button onClick={() => addProduct(product)}>
            Agregar al carrito
          </button>
        </div>
      </Product>
    );
  });
};

export default Products;

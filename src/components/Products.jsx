import React, { useContext } from "react";
import Stars from "simple-rating-stars";
import { formateoPrecio } from "../helper/formateo";
import FetchProduct from "../hooks/FetchProduct";
import { ProductContext } from "../hooks/ProductHook";
import { Product } from "../styled/Product";
import { Link } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

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
          <InnerImageZoom src={product.image} />
          {/* <img src={product.image} alt="" /> */}
        </div>
        <div className="productInfo">
          <Link className="productTitle" to={`/products/${product.id}`}>
            {product.title}
          </Link>
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

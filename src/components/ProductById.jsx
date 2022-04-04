import React, { useContext } from "react";
import { formateoPrecio } from "../helper/formateo";
import FetchProduct from "../hooks/FetchProduct";
import { ProductContainer } from "../styled/ProductId";
import Stars from "simple-rating-stars";
import Property from "./Property";
import Comments from "./Comments";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";

const ProductById = () => {
  // const context = useContext();
  // console.log("context", context);

  const { products: product } = FetchProduct(
    `http://localhost:4000/products/1`
  );
  console.log("product", product);

  return (
    <main>
      <div className="wrapper">
        <h1>{product?.model}</h1>
        <ProductContainer className="">
          <div className="imageContainer ">
            {product.images_zoom?.map((p) => {
              return <InnerImageZoom src={p} zoomScale={2} />;
            })}
          </div>
          <div className="productByInfo">
            <h2>{product.title}</h2>
            <div className="priceStar ">
              <p>{formateoPrecio(product.price)}</p>
              <span className="discount">{formateoPrecio(product.price)}</span>
              <Stars
                stars={Number(product.score)}
                outOf={5}
                full={"#fff04c"}
                empty={"#E1F1FF"}
                stroke={"#369"}
              />
            </div>
            <p className="productText">{product.description}</p>
            <button className="button-fill">Comprar Ahora</button>
            <button className="button-unfill">Agregar al carrito</button>
          </div>
        </ProductContainer>
        <Property info={product} />
        <Comments info={product} />
      </div>
    </main>
  );
};

export default ProductById;

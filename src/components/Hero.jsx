import React from "react";
import { Banner } from "../styled/Banner";
import watch from "../images/reloj.png";
import headPhone from "../images/headphones.png";

const Hero = () => {
  return (
    <Banner>
      <div className="wrapper">
        <div className="bannerContainer ">
          <div className="productContainer ">
            <div className="productInfo">
              <p className="title">50% de descuento en Apple Watch</p>
              <a href="">Comprar ahora</a>
            </div>
            <div className="productImage">
              <img src={watch} alt="Reloj watch" />
            </div>
          </div>
          <div className="productContainer linearSecondary">
            <div className="productInfo">
              <p className="title">50% de descuento en Headphone</p>
              <a href="">Comprar ahora</a>
            </div>
            <div className="productImage">
              <img src={headPhone} alt="Audifonos" />
            </div>
          </div>
        </div>
      </div>
    </Banner>
  );
};

export default Hero;

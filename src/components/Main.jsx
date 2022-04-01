import React from "react";
import Hero from "./Hero";
import Products from "./Products";

const Main = () => {
  return (
    <>
      <Hero />
      <main>
        <div className="wrapper">
          <div className="mainContainer">
            <h3>Ofertas del día</h3>
            <Products />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

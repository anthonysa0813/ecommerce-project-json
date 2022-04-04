import React from "react";
import { PropertyContainer } from "../styled/ProductId";

const Property = ({ info }) => {
  console.log("info", info);
  return (
    <PropertyContainer className="">
      <h4>{info.model}</h4>
      <div className="qualityContainer">
        <p>Memoria RAM: 8 GB</p>
        <p>Tipo de resolución: Full HD</p>
        <p>Tamaño de la pantalla: 13.3 "</p>
        <p>Duración de la batería: 18 h</p>
      </div>
    </PropertyContainer>
  );
};

export default Property;

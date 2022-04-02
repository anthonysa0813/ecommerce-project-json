import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductHookProvider = ({ children }) => {
  const [productsArr, setProductsArr] = useState({
    carrito: [],
    total: 0,
  });

  return (
    <ProductContext.Provider value={{ productsArr, setProductsArr }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductHookProvider;

import React, { useState, useEffect } from "react";

const FetchProduct = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct(url);
  }, [url]);

  const getProduct = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  };

  return { products };
};

export default FetchProduct;

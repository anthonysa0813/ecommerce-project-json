import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
import ProductById from "./components/ProductById";
import ProductPage from "./components/ProductPage";
import ProductHookProvider from "./hooks/ProductHook";
import "./index.css";

const App = () => {
  return (
    <ProductHookProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path={"/products/:id"} element={<ProductById />} />
        </Routes>
      </BrowserRouter>
    </ProductHookProvider>
  );
};

export default App;

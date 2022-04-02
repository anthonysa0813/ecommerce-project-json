import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Menu from "./components/Menu";
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
        </Routes>
      </BrowserRouter>
    </ProductHookProvider>
  );
};

export default App;

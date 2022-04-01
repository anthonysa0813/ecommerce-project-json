import React from "react";
import logo from "../images/logo.svg";
import { Header } from "../styled/Header";

const Menu = () => {
  return (
    <Header className="">
      <div className="wrapper">
        <div className="headerContainer ">
          <div className="logoContainer">
            <img src={logo} alt="Logo de la ecommerce" />
          </div>
          <nav className="navigation">
            <ul>
              <li>Productos</li>
              <li>Blog</li>
              <li>Tienda</li>
              <li>Contacto</li>
              <li>
                <i className="icon-shopping-cart"></i>
              </li>
            </ul>
          </nav>
          <form className="form ">
            <input type="text" placeholder="Busca producto" />
            <button>
              <i className="icon-Input-Vector"></i>
            </button>
          </form>
        </div>
      </div>
    </Header>
  );
};

export default Menu;

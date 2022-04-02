import React, { useContext } from "react";
import { ProductContext } from "../hooks/ProductHook";
import logo from "../images/logo.svg";
import { Header } from "../styled/Header";
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  const { productsArr } = useContext(ProductContext);

  const { carrito, total } = productsArr;
  return (
    <Header className="">
      <div className="wrapper">
        <div className="headerContainer ">
          <div className="logoContainer">
            <Link to="/">
              <img src={logo} alt="Logo de la ecommerce" />
            </Link>
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <NavLink to="/products">Productos</NavLink>
              </li>
              <li>Blog</li>
              <li>Tienda</li>
              <li>Contacto</li>
              <li className=" iconContent">
                <i className="icon-shopping-cart">
                  <span className="cartAlert">
                    <p>{carrito.length}</p>
                  </span>
                </i>
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

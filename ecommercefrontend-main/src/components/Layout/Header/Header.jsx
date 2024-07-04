import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Proptypes from "prop-types";
import { CartContext } from "../../../context/CartProvider";
import "./Header.css";
const Header = ({ setIsSearchShow }) => {
  const { cartItems } = useContext(CartContext);
  const { pathname } = useLocation();
  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
          "Verimliliği Yükseltin:
            <a href="shop.html"> Ekibinizi Kolayca Yönetin!"</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to={"/"} className="logo">
             
              </Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                  <Link
                      to={"/"}
                      className={`menu-link ${pathname === "/" && "active"}`}
                    >
                      Anasayfa
                    
                    
                    </Link>
                   
                  </li>
                  
                  
                  
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"/auth"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <button
                  className="search-button"
                  onClick={() => {
                    setIsSearchShow(true);
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
Header.propTypes = {
  setIsSearchShow: Proptypes.func,
};

import React from "react";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navigation navbar navbar-expand-lg navbar-light original">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
            <div className="mobail-menu">
              <button type="button" className="navbar-toggler open-btn">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar first-angle"></span>
                <span className="icon-bar middle-angle"></span>
                <span className="icon-bar last-angle"></span>
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <div className="navbar-header">
              {/*logo*/}
              <NavLink to={"/"}>
                <a className="navbar-brand">
                  <img
                    src={Logo}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6 col-md-1 col-1">
            <div
              id="navbar"
              className="collapse navbar-collapse navigation-holder"
            >
              <button className="menu-close">
                <i className="ti-close"></i>
              </button>
              {/*list menu*/}
              <ul className="nav navbar-nav mb-2 mb-lg-0">
                <li className="menu-item-has-children">
                  <NavLink to={"/"}>
                    <a>Accueil</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/a-propos"}>
                    <a>A propos</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>
                    <a>Services</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/blog"}>
                    <a>Blog</a>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>
                    <a>Contact</a>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/*Formulaire de recherche */}
          <div className="col col-lg-3 col-md-2 col-2">
            <div className="header-right">
              <div className="header-search-form-wrapper">
                <div className="cart-search-contact">
                  <button className="search-toggle-btn">
                    <i className="fi flaticon-magnifiying-glass"></i>
                  </button>
                  <div className="header-search-form">
                    <form>
                      <div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search here..."
                        />
                        <button type="submit">
                          <i className="fi flaticon-magnifiying-glass"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*btn devis */}
              <div className="close-form">
                <NavLink to={"/contact"}>
                  <a className="theme-btn">OBTENIR UN DEVIS GRATUIT</a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

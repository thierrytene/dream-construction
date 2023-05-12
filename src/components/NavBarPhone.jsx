import React from "react";
import Logo from "../assets/images/logo.png";

function NavBarPhone() {
  return (
    <nav className="navigation navbar navbar-expand-lg navbar-light sticky-header">
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
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-1 col-1">
            <div id="navbar" className="collapse navbar-collapse navigation-holder">
              <button className="menu-close">
                <i className="ti-close"></i>
              </button>
              <ul className="nav navbar-nav mb-2 mb-lg-0">
                <li className="menu-item-has-children">
                  <a className="active" href="#">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="/about">A propos</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="/services">Services</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
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
                          placeholder="Recherche..."
                        />
                        <button type="submit">
                          <i className="fi flaticon-magnifiying-glass"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="close-form">
                <a className="theme-btn" href="contact.html">
                  OBTENIR UN DEVIS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarPhone;

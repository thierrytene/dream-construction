import React from 'react'
import Logo from "../assets/images/logo.png"
import { NavLink } from 'react-router-dom';

function NavBar() {
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
          {/*LOGO */}
          <div className="col-lg-3 col-md-6 col-6">
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                <img src={Logo} style={{width: "100px", height:"100px"}} alt="logo dream construction" />
              </a>
            </div>
          </div>

          {/*MENU */}
          <div className="col-lg-6 col-md-1 col-1">
            <div id="navbar" className="collapse navbar-collapse navigation-holder">
              <button className="menu-close">
                <i className="ti-close"></i>
              </button>
              <ul className="nav navbar-nav mb-2 mb-lg-0">
                <li className="menu-item-has-children">
                  <a href="#">
                    Acceuil
                   </a>
                </li>
                <li>
                  <a href="#">A propos</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Services</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/*FORM DEVIS */}
          <div className="col col-lg-3 col-md-2 col-2">
            <div className="header-right">
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

export default NavBar
import React from "react";
import { NavLink } from "react-router-dom";
import BannerImage from '../../assets/images/blog/about-widget.jpg'

function BannerPage({ title }) {
  return (
    <section className="wpo-page-title" style={{background: `url(${BannerImage}) no-repeat center top/cover`}}>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="wpo-breadcumb-wrap">
              <h2>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>{title}</font>
                </font>
              </h2>
              <ol className="wpo-breadcumb-wrap">
                <li>
                  <NavLink to={"/"}>
                    <a>
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Accueil
                        </font>
                      </font>
                    </a>
                  </NavLink>
                </li>
                <li>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>{title}</font>
                  </font>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerPage;

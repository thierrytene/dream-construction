import React from "react";

function Footer() {
  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="widget-title">
                  <h3>À propos de nous</h3>
                </div>
                <p>
                  Avec plus de 30 ans d'expérience, la société de services de
                  construction est devenue la plus grande entreprise de
                  construction du pays.
                </p>
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-location"></i>7 rue du lac vert
                      Crawfordsville, IN 47933
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>
                      +1 800 123 456 789
                    </li>
                    <li>
                      <i className="fi flaticon-send"></i>
                      info@exemple.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Prestations de service</h3>
                </div>
                <ul>
                  <li>
                    <a href="service-single.html">Construction de bâtiments</a>
                  </li>
                  <li>
                    <a href="service-single.html">Construction de maison</a>
                  </li>
                  <li>
                    <a href="service-single.html">Conception intérieure</a>
                  </li>
                  <li>
                    <a href="service-single.html">Construction de route</a>
                  </li>
                  <li>
                    <a href="service-single.html">Creuser hors fichier</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                Copyright © 2023 Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

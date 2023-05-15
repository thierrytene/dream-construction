import React from "react";
import BgContact from "../assets/images/contact.jpg";
import BgContactUser from "../assets/images/contact.png";
function Reservation() {
  return (
    <section className="wpo-contact-section section-padding">
      <div className="wpo-contact-img">
        <img src={BgContact} alt="" />
        <a
          href="https://www.youtube.com/embed/jAPsZ7_4bxg"
          className="video-btn"
          data-type="iframe"
        >
          <i className="fi flaticon-play"></i>
        </a>
      </div>
      <div className="wpo-contact-img-s2">
        <img src={BgContactUser} alt="" />
      </div>
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-contact-form-area">
                <div className="wpo-section-title-s2">
                  <span>RESERVATION EN LIGNE</span>
                  <h2>Prise de Rendez-vous en ligne.</h2>
                </div>
                <form className="contact-validation-active">
                  <div className="row">
                    <div className="col col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label for="name">Nom complet*</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label for="email">Email *</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="dreamconstruction@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label for="phone">Numéro de téléphone *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          id="phone"
                          placeholder="+237 *** *** ***"
                        />
                      </div>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>Selectionner votre service*</label>
                        <select name="subject" className="form-control">
                          <option disabled="disabled" selected="">
                            Service
                          </option>
                          <option value="Building Construction">
                            Building Construction
                          </option>
                          <option value="House Roomodel">House Roomodel</option>
                          <option value="Interior Design">
                            Interior Design
                          </option>
                          <option value="Renovation">Renovation</option>
                          <option value="OutField Digging">
                            OutField Digging
                          </option>
                          <option value="Road Construction">
                            Road Construction
                          </option>
                          <option value="Floors &amp; Roofs">
                            Floors &amp; Roofs
                          </option>
                          <option value="Plumbing">Plumbing</option>
                          <option value="Electricity">Electricity</option>
                        </select>
                      </div>
                    </div>
                    <div className="col fullwidth col-lg-12 ">
                      <div className="form-group">
                        <label for="note">Message court *</label>
                        <textarea
                          className="form-control"
                          name="messagge"
                          id="message"
                          placeholder="Entrer votre message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn">
                      Obtenir un RDV
                    </button>
                    <div id="loader">
                      <i className="ti-reload"></i>
                    </div>
                  </div>
                  <div className="clearfix error-handling-messages">
                    <div id="success">Merci</div>
                    <div id="error">
                      {" "}
                      Une erreur est subvenue, veillez réessayer plutard.
                    </div>
                  </div>
                </form>
                <div className="border-style"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;

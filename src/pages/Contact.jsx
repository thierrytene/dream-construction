import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import BannerPage from "../components/Blog/BannerPage";

function Contact() {

  const submitContact = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    let data = {
      email: formData.get('email'),
      telephone: formData.get('phone'),
      nom: formData.get('name'),
      sujet: formData.get('subject'),
      message: formData.get('message'),
    }
    e.target.reset()
    console.log(data);
  }



  return (
    <>
      <Header />
      <BannerPage title="Contact" />
      <section className="wpo-contact-pg-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="office-info">
                <div className="row">
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-placeholder"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Adresse</h2>
                        <p>7 rue du lac vert Crawfordsville, IN 47933</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-email"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Envoyez-nous un email</h2>
                        <p>info@exemple.com</p>
                        <p>info@exemple.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon">
                        <div className="icon">
                          <i className="fi flaticon-phone-call"></i>
                        </div>
                      </div>
                      <div className="office-info-text">
                        <h2>Téléphone</h2>
                        <p>+1 800 123 456 789</p>
                        <p>+1 800 123 654 987</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpo-contact-title">
                <h2>Avez vous une question&nbsp;?</h2>
                <p>
                  C'est un fait établi depuis longtemps qu'un lecteur sera
                  distrait par le contenu d'une page lorsqu'il la regarde.
                </p>
              </div>
              {/**=================================== Formulaire de contat */}
              <div className="wpo-contact-form-area">
                <form
                 onSubmit={submitContact}
                  className="contact-validation-active"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Nom complet*"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Adresse e-mail*"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Votre numéro de téléphone*"
                    />
                  </div>
                  <div>
                    <select name="subject" className="form-control">
                      <option disabled="disabled" defaultValue={''}>
                        Sélectionnez le service
                      </option>
                      <option value="Building Construction">
                        Construction de bâtiments
                      </option>
                      <option value="House Roomodel">
                        Modèle de chambre de maison
                      </option>
                      <option value="Interior Design">
                        Design d'intérieur
                      </option>
                      <option value="Renovation">Rénovation</option>
                      <option value="OutField Digging">
                        Creuser en extérieur
                      </option>
                      <option value="Road Construction">
                        Construction de route
                      </option>
                      <option value="Floors &amp; Roofs">
                        Sols &amp; Toits
                      </option>
                      <option value="Plumbing">Plomberie</option>
                      <option value="Electricity">Électricité</option>
                    </select>
                  </div>
                  <div className="fullwidth">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn">
                      <i
                        className="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i> &nbsp;
                      Contactez nous
                    </button>
                    <div id="loader">
                      <i className="ti-reload"></i>
                    </div>
                  </div>
                  <div className="clearfix error-handling-messages">
                    <div id="success">Merci</div>
                    <div id="error">
                      Une erreur s'est produite lors de l'envoi de votre message
                      Veuillez réessayer plus tard.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wpo-contact-map-section">
        <h2 className="hidden">Plan de contact</h2>
        <div className="wpo-contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
            allowFullScreen=""
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;

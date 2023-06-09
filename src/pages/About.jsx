import React from "react";
import Header from "../components/Header/Header";
import BannerPage from "../components/Blog/BannerPage";
import Footer from "../components/Footer";
import TitleSection from "../components/TitleSection";
import ServiceItem from "../components/ServiceItem";
import TeamItem from "../components/TeamItem";
import BlogItem from "../components/Blog/BlogItem";
import CounterItem from "../components/CounterItem";
import TestimonialItem from "../components/TestimonialItem";
import Signature from "../assets/images/signeture.png";
import AboutCEO from "../assets/images/about.jpg";
import { v4 as uuidv4 } from "uuid";

function About() {
  const services = [
    {
      title: "Construction de bâtiment",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/1.jpg",
      link: "#",
    },
    {
      title: "Construction de maison",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/2.jpg",
      link: "#",
    },
    {
      title: "Design intérieur",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/3.jpg",
      link: "#",
    },
    {
      title: "Plancher et toits",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/4.jpg",
      link: "#",
    },
    {
      title: "Plancher et toits",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/5.jpg",
      link: "#",
    },
    {
      title: "Electricité",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/6.jpg",
      link: "#",
    },
    {
      title: "Travaux de Plomberie",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/7.jpg",
      link: "#",
    },
    {
      title: "Rénovation",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/8.jpg",
      link: "#",
    },
    {
      title: "Creuser hors fouille",
      description:
        "La composition électronique resta essentiellement inchangée a été popularisée.",
      image: "../assets/images/service/9.jpg",
      link: "#",
    },
  ];
  const counters = [
    {
      icon: "../assets/images/icon/9.png",
      chiffre: "05",
      text: "Projet en cours",
      afterNumber: "",
    },
    {
      icon: "../assets/images/icon/10.png",
      chiffre: "10",
      text: "Techniciens",
      afterNumber: "+",
    },
    {
      icon: "../assets/images/icon/11.png",
      chiffre: "08",
      text: "Clients heureux",
      afterNumber: "",
    },
    {
      icon: "../assets/images/icon/12.png",
      chiffre: "01",
      text: "Récompense",
      afterNumber: "",
    },
  ];
  return (
    <>
      <Header />
      <BannerPage title="A propos" />
      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="wpo-about-section-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="wpo-about-img">
                  <img src={AboutCEO} alt="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-12">
                <div className="wpo-about-content">
                  <div className="wpo-section-title-s2">
                    <h2>
                      Plus de 5 ans d'expérience dans le service de construction
                    </h2>
                  </div>
                  <div className="wpo-about-content-inner">
                    <p>
                      Il existe de nombreuses variantes de passages de Lorem
                      Ipsum disponibles, mais la majorité ont subi une
                      altération sous une forme ou une autre, par de l'humour
                      injecté, ou des mots aléatoires qui ne semblent même pas
                      légèrement crédibles et en passant par les citations du
                      mot dans la littérature classique, a découvert le source
                      incontestable. Le Lorem Ipsum vient des sections.
                    </p>
                    <p>
                      Contrairement à la croyance populaire, le Lorem Ipsum
                      n'est pas simplement un texte aléatoire. Il a ses racines
                      dans un morceau de littérature latine classique de 45 av.
                    </p>
                    <div className="signeture">
                      <h4>Olivier ONANA</h4>
                      <p>Vertex Chambers, PDG</p>
                      <span>
                        <img src={Signature} alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*section liste des services */}
      <section className="wpo-service-section section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <TitleSection
                title="Nous Offrons Toutes Sortes De Services De Construction Modernes Professionnels"
                smallText="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry's standard dummy text ever since the
        1500s."
              />
            </div>
          </div>
          <div className="row">
            {services.map((service) => (
              <div className="col-lg-4 col-md-6 col-12" key={uuidv4()}>
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wpo-fun-fact-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="wpo-funfacts-text">
                <h3>
                  Nous fournissons toujours différents des autres services.
                </h3>
              </div>
            </div>
            <div className="col col-lg-6 offset-lg-1">
              <div className="wpo-fun-fact-grids clearfix">
                {counters.map(counter => (
                  <CounterItem key={uuidv4()} counter={counter} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section team */}
      <section className="wpo-team-section section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <TitleSection
                title="Notre équipe"
                smallText="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry's standard dummy text ever since the
        1500s."
              />
            </div>
          </div>
          <div className="wpo-team-wrap">
            <div className="row">
              <div className="col col-lg-3 col-md-6 col-12">
                <TeamItem />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section Témoignage */}
      <section className="wpo-testimonials-section section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <TitleSection
                title="Ce Que Les Gens Disent"
                smallText="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry's standard dummy text ever since the
        1500s."
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="testimonials-wrapper owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1337px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: "4013px",
                    }}
                  >
                    <TestimonialItem />
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span aria-label="Précédent">‹</span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Suivant">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section Last Article*/}
      <section className="wpo-blog-section section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <TitleSection
                title="Nos dernières Nouvelles"
                smallText="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry's standard dummy text ever since the
        1500s."
              />
            </div>
          </div>
          <div className="wpo-blog-items">
            <div className="row">
              <div className="col col-lg-4 col-md-6 col-12">
                <BlogItem />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;

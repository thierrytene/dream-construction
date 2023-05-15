import React from "react";
import BannerHome from "../components/Banner/BannerHome";
import TitleSection from "../components/TitleSection";
import ServiceItem from "../components/ServiceItem";
import CounterItem from "../components/CounterItem";
import LastProjetItem from "../components/LastProjetItem";
import TeamItem from "../components/TeamItem";
import Reservation from "../components/Reservation";
import TestimonialItem from "../components/TestimonialItem";
import BlogItem from "../components/Blog/BlogItem";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import BgCounter from "../assets/images/bg-counter.jpg";
import { v4 as uuidv4 } from "uuid";

function Home() {
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
  const travaux = [
    {
      categories: "Residential Factory",
      style: { position: "absolute", left: "0px", top: "0px" },
      image: "",
      title: "Commercial",
    },
    {
      categories: "Commercial",
      style: { position: "absolute", left: "437px", top: "0px" },
      image: "",
      title: "Commercial",
    },
    {
      categories: "Factory",
      style: { position: "absolute", left: "874px", top: "0px" },
      image: "",
      title: "Commercial",
    },
    {
      categories: "Roof Replacement",
      style: { position: "absolute", left: "0px", top: "323px" },
      image: "",
      title: "Commercial",
    },
    {
      categories: "Roof Replacement",
      style: { position: "absolute", left: "437px", top: "323px" },
      image: "",
      title: "Commercial",
    },
    {
      categories: "Residential Factory",
      style: { position: "absolute", left: "874px", top: "323px" },
      image: "",
      title: "Commercial",
    },
    {
      categories: "Residential Factory",
      style: { position: "absolute", left: "0px", top: "646px" },
      image: "",
      title: "Commercial",
    },
    {
      categories: "Residential Factory",
      style: { position: "absolute", left: "437px", top: "646px" },
      image: "",
      title: "Commercial",
    },
    {
      categories: "Residential Factory",
      style: { position: "absolute", left: "874px", top: "646px" },
      image: "",
      title: "Commercial",
    },
  ];
  return (
    <>
      <Header />
      <BannerHome />
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
      {/*section counters */}
      <section
        className="wpo-fun-fact-section-s2 section-padding"
        style={{ background: `url(${BgCounter}) no-repeat center center` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-12">
              <div className="wpo-fun-fact-grids clearfix">
                {counters.map((counter) => (
                  <CounterItem key={uuidv4()} counter={counter} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section liste projets */}
      <section className="wpo-projects section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <TitleSection
                title="Nos Travaux"
                smallText="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. has been the industry's standard dummy text ever since the
        1500s."
              />
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-12 sortable-gallery">
              <div className="gallery-filters projects-menu">
                <ul>
                  <li>
                    <a data-filter="*" href="#" className="current">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Tous les projets
                        </font>
                      </font>
                    </a>
                  </li>
                  <li>
                    <a data-filter=".Residential" href="#">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Résidentiel
                        </font>
                      </font>
                    </a>
                  </li>
                  <li>
                    <a data-filter=".Commercial" href="#">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Commercial
                        </font>
                      </font>
                    </a>
                  </li>
                  <li>
                    <a data-filter=".Factory" href="#">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>Usine</font>
                      </font>
                    </a>
                  </li>
                  <li>
                    <a data-filter=".Roof Replacement" href="#">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>
                          Remplacement du toit
                        </font>
                      </font>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="projects-grids gallery-container clearfix"
                style={{ position: "relative", height: "969.813px" }}
              >
                {travaux.map((projet) => (
                  <LastProjetItem key={uuidv4()} projet={projet} />
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
      {/*Section reservation */}
      <Reservation />
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
                    <span aria-label="Précédent">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>‹</font>
                      </font>
                    </span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span aria-label="Suivant">
                      <font style={{ verticalAlign: "inherit" }}>
                        <font style={{ verticalAlign: "inherit" }}>›</font>
                      </font>
                    </span>
                  </button>
                </div>
                <div class="owl-dots disabled"></div>
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

export default Home;

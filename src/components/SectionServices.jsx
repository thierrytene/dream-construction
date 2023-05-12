import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import F1 from '../assets/images/service/1.jpg'
import F2 from '../assets/images/service/2.jpg'
import F3 from '../assets/images/service/3.jpg'
import F4 from '../assets/images/service/4.jpg'
import F5 from '../assets/images/service/5.jpg'

const dataServices = [
    {
        title: "Etudes de projets",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Conseils",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Production des plans struturaux et architecturaux",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Production des plans 3D intérieurs et extérieurs",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Dimentionnement des éléments porteurs",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Devis et Réalisation",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Döcoration d'intérieur et extérieur",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Plomberie et electricité",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Vente des tôles et accesoires",
        description: "Electronic typesetting rema essentially unchanged was popularised.",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
    {
        title: "Autres",
        description: "Peinture, carrelage, staff, résine",
        image: `${F1}`,
        baseLink: "/services/service-detail"
    },
]

function SectionServices() {

    const [services, setservices] = useState(dataServices)
  return (
    <section className="wpo-service-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="wpo-section-title">
              <h2>
                Nous Offrons Toutes Sortes De Services De Construction Modernes
                Professionnels
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. has been the industry's standard dummy text ever since
                the 1500s.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6 col-12" key={uuidv4()}>
              <div className="wpo-service-item">
                <div className="wpo-service-img">
                  <img src={service.image} alt="" />
                </div>
                <div className="wpo-service-text">
                  <h2>
                    <a href="service-single.html">{service.title}</a>
                  </h2>
                  <p>
                    {service.description}
                  </p>
                  <a href="service-single.html">
                    En savoir plus
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionServices;

import React from "react";
import ServiceImage from "../assets/images/service/4.jpg";

function ServiceItem({service}) {

  return (
    <div className="wpo-service-item">
      <div className="wpo-service-img">
        <img src={ServiceImage} alt="" />
      </div>
      <div className="wpo-service-text">
        <h2>
          <a href={service.link}>{service.title}</a>
        </h2>
        <p>{service.description}</p>
        <a href={service.link}>
          En savoir plus{" "}
          <i className="fa fa-angle-double-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default ServiceItem;

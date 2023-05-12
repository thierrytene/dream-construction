import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Footer() {
  const [servicesData, setServicesData] = useState([
    {
      label: "Building Construction",
      baseUrl: "/services/construction",
      type: "internal",
    },
    {
      label: "House Construction",
      baseUrl: "/services/construction",
      type: "internal",
    },
    {
      label: "Interior Desing",
      baseUrl: "/services/construction",
      type: "internal",
    },
    {
      label: "Road Construction",
      baseUrl: "/services/construction",
      type: "internal",
    },
    {
      label: "OutFiled Digging",
      baseUrl: "/services/construction",
      type: "internal",
    },
  ]);
  
  const [socialLink, setSocialLink] = useState([
    {
      icone: "ti-facebook",
      baseUrl: "https://facebook.com",
    },
    {
      icone: "ti-twitter-alt",
      baseUrl: "https://facebook.com",
    },
    {
      icone: "ti-instagram",
      baseUrl: "https://facebook.com",
    },
    {
      icone: "ti-google",
      baseUrl: "https://facebook.com",
    },
  ]);

  useEffect( ()=>{

  }, [socialLink, servicesData])
  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="widget-title">
                  <h3>A propos de nous</h3>
                </div>
                <p>
                  With more than 30 years of experience, the Construction
                  services company has become the largest Construction company
                  in the country.
                </p>
                <ul>
                  {socialLink.map((social) => (
                    <li key={uuidv4()}>
                      <a href={social.baseUrl}>
                        <i className={social.icone}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi flaticon-location"></i>7 Green Lake
                      Street Crawfordsville, IN 47933
                    </li>
                    <li>
                      <i className="fi flaticon-phone-call"></i>+1 800 123 456
                      789
                    </li>
                    <li>
                      <i className="fi flaticon-send"></i>info@example.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Services </h3>
                </div>
                <ul>
                  {servicesData.map(link => (
                    <li key={uuidv4()}>
                      <a
                        href={link.baseUrl}
                        target={link.type == "internal" ? "" : "_blank"}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
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
                {" "}
                Copyright © 2023 All Rights Reserved. Design and realised by
                <a href="https://hives-solutions.com" target="_blank">
                  {" "}
                  Hives Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react'
import ImageBanner from '../../assets/images/hero/01.jpg'
function SectionOne() {
  return (
    <section className="wpo-hero-section-2">
      <div className="container">
        <div className="row">
          <div className="col col-xs-5 col-lg-5 offset-lg-7 col-12">
            <div className="wpo-hero-section-text">
              <div className="wpo-hero-subtitle">
                <span>:: Personnel hautement qualifié </span>
              </div>
              <div className="wpo-hero-title">
                <h2>
                  Prêt à vous  <span>aider</span>.
                </h2>
              </div>
              <div className="wpo-hero-des">
                <p>
                  We are certified company. We provide best Construction
                  services for you &amp; your company .
                </p>
              </div>
              <div className="btns">
                <ul>
                  <li>
                    <a href="appointment.html" className="btn theme-btn">
                      RESERVATION EN LIGNE
                    </a>
                  </li>
                  <li>
                    <div className="video-holder">
                      <a
                        href="https://www.youtube.com/embed/jAPsZ7_4bxg"
                        className="video-btn"
                        data-type="iframe"
                      >
                        <i className="fi flaticon-play"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-vec">
        <div
          className="right-img"
          style={{
            background: `url(${ImageBanner}) no-repeat right center`,
          }}
        ></div>
      </div>
    </section>
  );
}

export default SectionOne
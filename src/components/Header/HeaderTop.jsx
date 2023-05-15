import React from 'react'
import IconeClock from '../../assets/images/icon/1.png'
import IconePhone from '../../assets/images/icon/2.png'

function HeaderTop() {
    const data = {
        phone: "+237655516187",
        jourOuvert: 'Lundi - Samedi',
        heureOuverture: '8:00',
        jourFermeture: 'Lundi',
        heureFermeture: '17:00',
    }
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
            <div className="contact-intro">
              <ul>
                <li>
                  <i>
                    <img src={IconeClock} alt="" />
                  </i>
                  {data.jourOuvert}  ||  {data.heureOuverture} - {data.heureFermeture}
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
            <div className="contact-info">
              <ul>
                <li>
                  <a href="tel:+237">
                    <i>
                      <img src={IconePhone} alt="" />
                    </i>
                    {data.phone}
                  </a>
                </li>
                {/*<li className="lan-sec">
                  <div className="lang-menu">
                    <button className="flag-button">
                      <span className="flag-img">
                        <img src="assets/images/flag/en.svg" alt="" />
                        <span>English</span>
                      </span>
                    </button>
                    <ul className="sh">
                      <li className="flag-item">
                        <span className="flag-img">
                          <img src="assets/images/flag/es.png" alt="" />
                          <span>Spain</span>
                        </span>
                      </li>
                      <li className="flag-item">
                        <span className="flag-img">
                          <img src="assets/images/flag/fr.png" alt="" />
                          <span>France</span>
                        </span>
                      </li>
                      <li className="flag-item">
                        <span className="flag-img">
                          <img src="assets/images/flag/it.png" alt="" />
                          <span>Italy</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop
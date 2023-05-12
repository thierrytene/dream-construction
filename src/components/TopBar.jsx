import Horloge from "../assets/images/icones/1.png";
import Phone from "../assets/images/icones/2.png";

function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
            <div className="contact-intro">
              <ul>
                <li>
                  <i>
                    <img src={Horloge} alt="" />
                  </i>
                  Lundi - Samedi || 8:00 - 17:00
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
            <div className="contact-info">
              <ul>
                <li>
                  <a href="tel:+2376xxxxxxxxx">
                    <i><img src={Phone} alt="" /></i>
                    +237 6xxx xx xx xx
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

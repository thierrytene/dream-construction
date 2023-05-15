import React from "react";
import { NavLink } from "react-router-dom";
import TeamImage from '../assets/images/team/1.jpg'

function TeamItem() {
  return (
    <div className="wpo-team-item">
      <div className="wpo-team-img">
        <img src={TeamImage} alt="membre de l'équipe" />
        <div className="social">
          <ul>
            <li>
              <a href="#">
                <i className="ti-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-twitter-alt"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ti-skype"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wpo-team-text">
        <h2>
          <a href="#">Henry Barton</a>
        </h2>
        <span>Team Leader</span>
      </div>
    </div>
  );
}

export default TeamItem;

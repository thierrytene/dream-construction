import React from "react";
import ProjetItem from "../assets/images/projects/img-1.jpg";

function LastProjetItem({projet}) {

  return (
    <div className={`grid ${projet.categories}`} style={projet.style}>
      <div className="project-inner">
        <div className="img-holder">
          <img src={ProjetItem} alt="" />
        </div>
        <div className="hover-content">
          <div className="details">
            <h3>
              <a href="project-single.html">{projet.title}</a>
            </h3>
            <p className="cat">{projet.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastProjetItem;

import React from 'react'
import {v4 as uuidv4 } from 'uuid'
import C1 from "../assets/images/icon/9.png";
import C2 from "../assets/images/icon/10.png";
import C3 from "../assets/images/icon/11.png";
import C4 from "../assets/images/icon/12.png";
import BGcounter from "../assets/images/bg-counter.jpg"

const data = [
    {
        label: 'Projet en cour',
        icon: `${C1}`,
        count: '05'
    },
    {
        label: "Membre de l'équipe",
        icon: `${C2}`,
        count: '15'
    },
    {
        label: 'Client satisfait',
        icon: `${C3}`,
        count: '09'
    },
    {
        label: 'Award',
        icon: `${C4}`,
        count: '01'
    },
]

export default function Counter() {
  return (
    <section className="wpo-fun-fact-section-s2 section-padding" style={{background: `url(${BGcounter}) no-repeat center center`}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-12">
            <div className="wpo-fun-fact-grids clearfix">
              {data.map((item) => (
                <div className="grid" key={uuidv4()}>
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="info">
                    <h3
                      className="odometer odometer-auto-theme"
                      data-count={item.count}
                    >
                      +{item.count}
                    </h3>
                    <p>{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

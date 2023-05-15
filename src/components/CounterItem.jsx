import React from "react";
import CounterImage from "../assets/images/icon/10.png";
function CounterItem({ counter }) {
  const chiffre = counter.chiffre;
  let odonmeter = [];
  for (let i = 0; i < 3; i++) {
    odonmeter.push(
      <span className="odometer-digit">
        <span className="odometer-digit-spacer">8</span>
        <span className="odometer-digit-inner">
          <span className="odometer-ribbon">
            <span className="odometer-ribbon-inner">
              <span className="odometer-value">{chiffre[i]}</span>
            </span>
          </span>
        </span>
      </span>
    );
  }
  return (
    <div className="grid">
      <div className="icon">
        <img src={CounterImage} alt="icon" />
      </div>
      <div className="info">
        <h3>
          <span className="odometer odometer-auto-theme" data-count="85">
            <div className="odometer-inside">{odonmeter}</div>
          </span>
          {counter.afterNumber}
        </h3>
        <p>{counter.text}</p>
      </div>
    </div>
  );
}

export default CounterItem;

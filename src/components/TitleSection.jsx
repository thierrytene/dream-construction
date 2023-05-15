import React from "react";

function TitleSection({ title, smallText }) {
  return (
    <div className="wpo-section-title">
      <h2>{title}</h2>
      <p>{smallText}</p>
    </div>
  );
}

export default TitleSection;

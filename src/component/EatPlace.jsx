import React from "react";
import "./EatPlace.css";

const EatPlace = (props) => {
  return (
    <div className="EatPlace">
      <img src={props.image} className="food-pic" />
      <h3 className="name">{props.name}</h3>
      <h4 className="type" style={{ color: "#1E3F66" }}>
        {props.type}
      </h4>
      <h5 className="cost" style={{ color: "green" }}>
        {props.cost}
      </h5>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <button className="visit-site-button">Visit Site</button>
      </a>
    </div>
  );
};

export default EatPlace;

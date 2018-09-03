import React, { Component } from "react";
import "../css/Card.css";

const Card = props => (
  <div className="card">
    <div className="inner">
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.contents}</p>
    </div>
  </div>
);

export default Card;

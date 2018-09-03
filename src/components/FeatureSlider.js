import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
import celebrating from "../images/celebrating.png";
import coding from "../images/coding.png";
import cycling from "../images/cycling.png";
import hiking from "../images/hiking.png";
import reading from "../images/reading.png";
import "../css/FeatureSlider.css";

class FeatureSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <Card
          title="Camping with friends"
          contents="Organize a camping trip with your close friends"
          image={hiking}
        />
        <Card
          title="Weekly coding meetup"
          contents="Start a public group to teach people how to code"
          image={coding}
        />
        <Card
          title="Bike ride & beers"
          contents="Go for a ride, then grab some beers with your pals"
          image={cycling}
        />
        <Card
          title="Surprise Birthday Party"
          contents="Put on a surprise birthday party for your best friend"
          image={celebrating}
        />
        <Card
          title="Neighborhood book club"
          contents="Discuss powerful books with your favorite neighbors"
          image={reading}
        />
      </Slider>
    );
  }
}

export default FeatureSlider;

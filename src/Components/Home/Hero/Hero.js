import React from "react";

import "./Hero.scss";

const HomeHero = props => {
  const { more, seeMore } = props;

  const images = [
    { src: "bg2.png", price: 10.8, rooms: 7, rr: 5, hovered: false },
    { src: "blue", price: 10.8, rooms: 7, rr: 5, hovered: false },
    { src: "green", price: 10.8, rooms: 7, rr: 5, hovered: false },
    { src: "gray", price: 10.8, rooms: 7, rr: 5, hovered: false },
    { src: "yellow", price: 10.8, rooms: 7, rr: 5, hovered: false }
  ];

  return more ? (
    images.map((res, i) => {
      return (
        <div className={`homeHero full ${res.src}`}>
          <h3>
            Picture {i + 1} of {images.length}
          </h3>
          <div className="escapeButton">
            <h4 onClick={seeMore}>X</h4>
          </div>
        </div>
      );
    })
  ) : (
    <div className="homeHero" />
  );
  //  <div className={more ? "homeHero full" : "homeHero"} />
};

export default HomeHero;

import React from "react";

import "./Hero.scss";

const HomeHero = props => {
  const { more, seeMore } = props;

  return more ? (
    <div className="homeHero full">
      <div className="escapeButton">
        <h4 onClick={seeMore}>X</h4>
      </div>
    </div>
  ) : (
    <div className="homeHero" />
  );
  //  <div className={more ? "homeHero full" : "homeHero"} />
};

export default HomeHero;

import React from "react";

import "./Hero.scss";

const HomeHero = props => {
  const { more } = props;
  return <div className={more ? "homeHero full" : "homeHero"} />;
};

export default HomeHero;

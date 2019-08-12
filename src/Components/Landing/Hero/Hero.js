import React from "react";

import "./Hero.scss";
import Info from "./Info/Info";

const Hero = props => {
  const { search, onSearch } = props;
  return (
    <div className="Hero">
      <div className={search ? `heroImage search` : "heroImage"} />
      <Info onSearch={onSearch} search={search} />
    </div>
  );
};

export default Hero;

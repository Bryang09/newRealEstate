import React from "react";

import "./Hero.scss";

const HomeHero = props => {
  const { more, seeMore, house } = props;

  const images = house.img;

  const result = images.map((res, i) => {
    return (
      <div
        className={`homeHero full`}
        key={i}
        style={{ backgroundImage: `url(${house.img[i]})` }}
      >
        {/* <h3>
            Picture {i + 1} of {res.length}
          </h3> */}
        <div className="escapeButton">
          <h4 onClick={seeMore}>X</h4>
        </div>
      </div>
    );
  });
  console.log(house);

  return more ? (
    result
  ) : (
    <div
      className="homeHero"
      style={{ backgroundImage: `url(${house.img[0]})` }}
    />
  );
};

export default HomeHero;

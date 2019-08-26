import React from "react";

import "./Hero.scss";

const HomeHero = props => {
  const { more, seeMore, house } = props;

  const images = house.img;

  const result = images.map((res, i) => {
    console.log(house.img.length);
    return (
      <div
        className={`homeHero full`}
        key={i}
        style={{
          backgroundImage: `url(${house.img[i]})`
          // minWidth: "100vw",
          // transition: "1s ease"
        }}
      >
        <h3>
          Picture {i + 1} of {images.length}
        </h3>
        <div className="escapeButton">
          <h4 onClick={seeMore}>X</h4>
        </div>
      </div>
    );
  });

  return result;
  // ? (
  //   result
  // ) : (
  //   <div
  //     className="homeHero"
  //     style={{ backgroundImage: `url(${house.img[0]})` }}
  //   />
  // );
};

export default HomeHero;

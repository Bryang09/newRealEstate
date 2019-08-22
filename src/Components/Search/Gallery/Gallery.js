import React from "react";

import { Link } from "react-router-dom";

const Gallery = props => {
  const { info } = props;

  console.log(info);

  const results = info.map((res, i) => {
    return (
      <div className="imgContainer" key={i}>
        <div className="img">
          <div className="info">
            <span className="price">
              <i>{`$${res.price} M`}</i>{" "}
            </span>

            <Link to={`/home/${i}`} id="houseLink">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return results;
};

export default Gallery;

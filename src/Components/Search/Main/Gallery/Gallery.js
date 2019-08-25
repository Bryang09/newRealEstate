import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Gallery = props => {
  const { info, houses } = props;

  console.log(info);

  const results = info.map((res, i) => {
    console.log(res.img[0]);

    return (
      <div className="imgContainer" key={i}>
        <div
          className="img"
          style={{
            backgroundImage: `url(${res.img[0]})`
          }}
        >
          <Link to={`/home/${res._id}`}>
            <div className="info">
              <div className="infoContainer">
                <div className="information">
                  <h4>${res.price}</h4>
                </div>
                <div className="information">
                  <h4>{res.size} sq.ft</h4>
                </div>
                <div className="information">
                  <h4>
                    <FontAwesomeIcon icon={faHeart} />
                    {res.likes}
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return results;
};

export default Gallery;

import React from "react";

import "./Info.scss";

const HomeInfo = props => {
  const { seeMore, more } = props;
  return (
    <div className={more ? "homeInfo none" : "homeInfo"}>
      <div className="container">
        <div className="name">
          <h2>Name</h2>
          <h4>11,200 sqft</h4>
        </div>

        <div className="hardInfo">
          <div className="rooms">
            <h4 className="label">Rooms</h4>
            <h4 className="value">6</h4>
          </div>
          <div className="bathRooms">
            <h4 className="label">Bathrooms</h4>
            <h4 className="value">9</h4>
          </div>
        </div>

        <div className="location">
          <h4 className="label">Location</h4>
          <h4 className="value">Los Angeles, California</h4>
        </div>

        <div className="year">
          <h4 className="label">Year Built</h4>
          <h4 className="value">2014</h4>
        </div>

        <div className="price">
          <h4 className="label">Price</h4>
          <h4 className="value">$ 20M</h4>
        </div>

        <div className="buttons">
          <div className="seeMore">
            <h4 onClick={seeMore}>See More!</h4>
          </div>

          {/* THIS WILL OPEN THE SHARE MODAL */}
          <div className="share">
            <h4>
              <i className="fa fa-share" />
            </h4>
          </div>

          {/* THIS WILL OPEN THE MAIL MODAL */}
          <div className="mail">
            <h4>
              <i className="fa fa-envelope" aria-hidden="true" />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;

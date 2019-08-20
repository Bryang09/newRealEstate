import React from "react";

import Buttons from "./Buttons";

import "./Info.scss";

const HomeInfo = props => {
  const { seeMore, more, onMail, onShare } = props;
  return (
    <div className={more ? "homeInfo none" : "homeInfo"}>
      <div className="container">
        <div className="name">
          <h2>Name</h2>
          <h4>11,200 sqft</h4>
        </div>

        <div className="hardInfo">
          <div className="rooms section">
            <h4 className="label">Rooms</h4>
            <h4 className="value">6</h4>
          </div>
          <div className="bathRooms section">
            <h4 className="label">Bathrooms</h4>
            <h4 className="value">9</h4>
          </div>
        </div>

        <div className="location section">
          <h4 className="label">Location</h4>
          <h4 className="value">Los Angeles, California</h4>
        </div>

        <div className="year section">
          <h4 className="label">Year Built</h4>
          <h4 className="value">2014</h4>
        </div>

        <div className="price section">
          <h4 className="label">Price</h4>
          <h4 className="value">$ 20M</h4>
        </div>

        <Buttons onMail={onMail} onShare={onShare} seeMore={seeMore} />
      </div>
    </div>
  );
};

export default HomeInfo;

import React from "react";

import { Link } from "react-router-dom";

import "./Info.scss";

const Info = props => {
  const { onSearch, search } = props;
  return (
    <div
      className="info"
      style={!search ? { display: "flex" } : { display: "none" }}
    >
      <h2>
        Welcome to <span>Finder</span>{" "}
      </h2>

      <div className="pageDesc">
        <h3>We don't help you buy a house,</h3>
        <h3>
          We help you buy a <span>Home</span>{" "}
        </h3>
      </div>

      <Link to="/search">
        <h4>Start Searching!</h4>
      </Link>
    </div>
  );
};

export default Info;

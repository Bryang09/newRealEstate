import React from "react";

import "./Info.scss";

const Info = () => {
  return (
    <div className="info">
      <h2>
        Welcome to <span>Finder</span>{" "}
      </h2>

      <div className="pageDesc">
        <h3>We don't help you buy a house,</h3>
        <h3>
          We help you buy a <span>Home</span>{" "}
        </h3>
      </div>

      <h4>Start Searching!</h4>
    </div>
  );
};

export default Info;

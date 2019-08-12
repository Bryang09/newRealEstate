import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <Link to="/">
            <h3>
              Finder <span>.</span>{" "}
            </h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Nav from "../Nav/Nav";

class Landing extends Component {
  state = {
    search: false
  };

  render() {
    const { search } = this.state;

    return (
      <div className="Landing">
        <Nav color="fff" />
        <Hero search={search} />
      </div>
    );
  }
}

export default Landing;

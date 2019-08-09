import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Nav from "../Nav/Nav";

class Landing extends Component {
  state = {
    bgActive: false
  };
  render() {
    return (
      <div className="Landing">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default Landing;

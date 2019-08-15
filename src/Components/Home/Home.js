import React, { Component } from "react";
import Nav from "../Nav/Nav";
import HomeHero from "./Hero/Hero";
import HomeInfo from "./Info/Info";

import "./Home.scss";

class Home extends Component {
  state = {
    seeMore: false
  };

  onSeeMore = () => this.setState({ seeMore: !this.state.seeMore });

  render() {
    const { seeMore } = this.state;

    return (
      <div className="Home">
        <Nav />
        <HomeHero />
        <HomeInfo />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import Nav from "../Nav/Nav";
import HomeHero from "./Hero/Hero";
import HomeInfo from "./Info/Info";

import "./Home.scss";
import FullHero from "./Hero/FullHero/FullHero";

class Home extends Component {
  state = {
    seeMore: false
  };

  onSeeMore = () => this.setState({ seeMore: !this.state.seeMore });

  onMail = () => alert("Mail");
  onShare = () => alert("Share");
  render() {
    const { seeMore } = this.state;

    console.log(seeMore);

    return (
      <div className={seeMore ? "Home Scroll" : "Home"}>
        <Nav />

        {/* {seeMore ? <FullHero /> : <HomeHero more={seeMore} />} */}
        <HomeHero more={seeMore} seeMore={this.onSeeMore} />
        <HomeInfo
          more={seeMore}
          seeMore={this.onSeeMore}
          onMail={this.onMail}
          onShare={this.onShare}
        />
      </div>
    );
  }
}

export default Home;

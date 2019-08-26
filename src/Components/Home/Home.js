import React, { Component } from "react";
import Nav from "../Nav/Nav";
import HomeHero from "./Hero/Hero";
import HomeInfo from "./Info/Info";

import axios from "axios";

import "./Home.scss";

class Home extends Component {
  state = {
    seeMore: false,
    id: null,
    house: null
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;

    this.setState({ id });

    axios
      .get(`/api/houses/${id}`)
      .then(res => this.setState({ house: res.data }))
      .catch(err => console.log(err));
  };

  onSeeMore = () => this.setState({ seeMore: !this.state.seeMore });

  onMail = () => alert("Mail");
  onShare = () => alert("Share");

  render() {
    const { seeMore, id, house } = this.state;

    console.log(seeMore);
    return (
      <div className={seeMore ? "Home Scroll" : "Home"}>
        <Nav />

        {house !== null ? (
          <HomeHero
            more={seeMore}
            seeMore={this.onSeeMore}
            house={house !== null ? house : null}
          />
        ) : (
          <h1>Loading</h1>
        )}

        <HomeInfo
          more={seeMore}
          seeMore={this.onSeeMore}
          onMail={this.onMail}
          onShare={this.onShare}
          house={house !== null ? house : "Loading"}
        />
      </div>
    );
  }
}

export default Home;
